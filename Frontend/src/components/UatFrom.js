import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { testCasesPrefill } from './utils/test_case';
import { useNavigate, useParams } from 'react-router-dom';
import { addNewTestRecord } from '../services/api';

const UatForm = () => {
    const [testCases, setTestCases] = useState([]);
    const [status, setStatus] = useState([]);
    const [comments, setComments] = useState([]);
    const [tester, setTester] = useState('');

    const { appName } = useParams()
    const navigate = useNavigate()

    const initiate = () => {
        setTestCases(testCasesPrefill);
        const cachedStatus = JSON.parse(localStorage.getItem('uat_status') || '[]');
        const cachedComments = JSON.parse(localStorage.getItem('uat_comments') || '[]');
        setStatus(cachedStatus);
        setComments(cachedComments);
    }

    useEffect(() => {

     initiate()

    }, []);



    const handleStatusChange = (i, value) => {
        const newStatus = [...status];
        newStatus[i] = value;
        setStatus(newStatus);
    };

    const handleCommentChange = (i, value) => {
        const newComments = [...comments];
        newComments[i] = value;
        setComments(newComments);
    };

    const exportData = (type) => {
        const rows = testCases.map((tc, i) => [
            tc.testCaseID,
            tc.section,
            tc.title,
            tc.steps.join(' '),
            tc.expectedResult,
            status[i] || '',
            comments[i] || '',
            tester || 'Anonymous',
            new Date().toLocaleString(),
        ]);
        const header = ['Test Case ID', 'Section', 'Title', 'Steps', 'Expected Result', 'Status', 'Comments', 'Tester', 'Timestamp'];
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
        XLSX.utils.book_append_sheet(wb, ws, 'UAT Results');
        XLSX.writeFile(wb, `UAT_Results_${new Date().toISOString().slice(0, 10)}.${type}`);
    };

    const shareCSV = () => {
        const rows = testCases.map((tc, i) => [
            tc.testCaseID,
            tc.section,
            tc.title,
            tc.steps.join(' '),
            tc.expectedResult,
            status[i] || '',
            comments[i] || '',
            tester || 'Anonymous',
            new Date().toLocaleString(),
        ]);
        const header = ['Test Case ID', 'Section', 'Title', 'Steps', 'Expected Result', 'Status', 'Comments', 'Tester', 'Timestamp'];
        const csvContent = [header.join(','), ...rows.map(r => r.map(val => `"${val}"`).join(','))].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const file = new File([blob], `UAT_Results_${new Date().toISOString().slice(0, 10)}.csv`, { type: 'text/csv' });
        const shareData = {
            title: 'UAT Report CSV',
            text: 'Here is the UAT CSV export.',
            files: [file],
        };
        if (navigator.canShare && navigator.canShare(shareData)) {
            navigator.share(shareData).catch(console.error);
        } else {
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name;
            a.click();
        }
    };

    const handleUpload = async () => {
        const rows = testCases.map((tc, i) => ({
            testCaseId: tc.testCaseID,
            section: tc.section,
            title: tc.title,
            steps: tc.steps,
            expectedResult: tc.expectedResult,
            status: status[i] || '',
            comment: comments[i] || '',
    }));

    let payload = {
        testCases: rows,
        testerName: tester,
        appName: appName
    }

    let response = await addNewTestRecord(payload)
    if(response.status === 200) {
        alert("Record saved successfully")
        window.location.reload()
    }

    }

    return (
        <div style={{
            marginTop: '5%',
            padding: '20px',
            fontFamily: 'Segoe UI, sans-serif',
            background: '#f0f2f5',
            color: '#333',
            minHeight: '100vh'
        }}>

            <h1 style={{ textAlign: 'center', color: '#2a4365' }}>{appName.toLocaleUpperCase()} App – UAT Form</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                alignItems: 'center',
                background: '#fff',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                marginBottom: '30px'
            }}>
                <label><span role="img" aria-label="user">👤</span> Tester Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name here"
                    value={tester}
                    onChange={(e) => setTester(e.target.value)}
                    style={{
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        minWidth: '250px',
                        fontSize: '15px',
                        flex: '1 1 250px'
                    }}
                />

                <button
                    onClick={() => exportData('xlsx')}
                    style={{
                        padding: '10px 18px',
                        backgroundColor: '#2b6cb0',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={e => e.target.style.backgroundColor = '#2c5282'}
                    onMouseLeave={e => e.target.style.backgroundColor = '#2b6cb0'}
                >
                    Download Excel
                </button>

                <button style={{
                    padding: '10px 18px',
                    backgroundColor: '#2b6cb0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'background 0.3s ease'
                }} onClick={() => exportData('csv')}>Download CSV</button>
                <button style={{
                    padding: '10px 18px',
                    backgroundColor: '#2b6cb0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'background 0.3s ease'
                }} onClick={shareCSV}>Share CSV</button>
                 <button style={{
                    padding: '10px 18px',
                    backgroundColor: '#2b6cb0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'background 0.3s ease'
                }} onClick={handleUpload}>Upload to Cloud</button>
                <button style={{
                    padding: '10px 18px',
                    backgroundColor: '#2b6cb0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'background 0.3s ease'
                }} onClick={() => {
                    navigate("/uat-report/"+appName)
                }}>View Existing records</button>
            </div>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                fontSize: '14px',
                borderRadius: '10px',
                overflow: 'hidden'
            }}>
                <thead style={{ position: 'sticky', top: 0, background: '#2b6cb0', color: '#fff', zIndex: 1 }}>
                    <tr>
                        {['Test_ID', 'Section', 'Title', 'Steps', 'Expected Result', 'Status', 'Comments', 'Tester', 'Timestamp'].map((text, idx) => (
                            <th key={idx} style={{ padding: '12px', border: '1px solid #ccc', textAlign: 'left' }}>{text}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {testCases.map((tc, i) => (
                        <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#f9f9f9' : 'white' }}>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>{tc.testCaseID}</td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>{tc.section}</td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>{tc.title}</td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>
                                <ul style={{ margin: 0, paddingLeft: '18px' }}>
                                    {tc.steps.map((step, j) => <li key={j}>{step}</li>)}
                                </ul>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>{tc.expectedResult}</td>
                            <td style={{ padding: '10px', border: '1px solid #eee', width: 'max-content' }}>
                                <select
                                    
                                    value={status[i] || ''}
                                    onChange={e => handleStatusChange(i, e.target.value)}
                                    style={{
                                        width: 'max-content',
                                        padding: '6px',
                                        borderRadius: '6px',
                                        border: '1px solid #ccc'
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="Pass">Pass</option>
                                    <option value="Fail">Fail</option>
                                    <option value="Incomplete">Incomplete</option>
                                    <option value="Blocked">Blocked</option>
                                </select>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>
                                <textarea
                                    rows="2"
                                    value={comments[i] || ''}
                                    onChange={e => handleCommentChange(i, e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '6px',
                                        borderRadius: '6px',
                                        border: '1px solid #ccc',
                                        resize: 'vertical'
                                    }}
                                />
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>{tester || 'Anonymous'}</td>
                            <td style={{ padding: '10px', border: '1px solid #eee' }}>{status[i] || comments[i] ? new Date().toLocaleString() : ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default UatForm;
