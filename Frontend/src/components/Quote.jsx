import React, { useState } from 'react';
import axios from 'axios';

const baseUrl= process.env.NODE_ENV ==="development"? 'http://localhost:8000' : 'https://dev.iwayplus.in'

console.log(process.env.NODE_ENV);
const apiClient = axios.create({
  baseURL: baseUrl 
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '20px',
    marginTop:'100px',
  },
  heading: {
    color: 'var(--IwayPlus-RED, #E63F31)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    marginBottom: '20px',

    
  },
  formContainer: {
    borderRadius: '20px',
    border: '1px solid rgba(0, 0, 0, 0.20)',
    padding: '20px',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '20px',
    display: 'flex',
    gap: '200px',
  },
  specialContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '20px',
  },
  formRow: {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12%',
    marginBottom: '20px',

    width: '100%',
    // paddingLeft: '51px',

    
  },
  formGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    gap: '10px',
  },
  question: {
    
    color: 'var(--Gray-700, #344054)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0.22px',
  },
  input: {
    width: '270px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color: 'var(--Gray-500, #667085)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
  },
  textArea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color: 'var(--Gray-500, #667085)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    
    height: '25px',
  },
  radioInputContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
  },
  radioInput: {
    color: 'var(--Gray-700, #344054)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.18px',
  },
  rowWithTextArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },
  flexGrowTextArea: {
    flexGrow: 1,
    
  },
  small: {
    display: 'flex',
    color: '#344054',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  },
  smallTextArea: {
    borderRadius: '8px',
    border: '1px solid var(--Gray-300, #D0D5DD)',
    background: 'var(--White, #FFF)',
    width:'90%',
    /* Shadow/xs */
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  },
  submitButton: {
    display: 'flex',
    padding: '12px 40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '8px',
    border: '1px solid var(--Gray-300, #D0D5DD)',
    background: 'var(--White, #FFF)',

    /* Shadow/xs */
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    cursor: 'not-allowed',
  },
  select: {
    // Styles for select dropdown
    padding: '5px',
    width: '120px', // Adjust width as needed
  },
};

const Quote = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    coreFunctionality: '',
    timeline: '',
    service: '',
    area: '',
    source: '',
  });

  const [otherAnswers, setOtherAnswers] = useState({
    coreFunctionality: '',
    timeline: '',
    source: '',
  });

  const handleInputChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleRadioChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleOtherAnswerChange = (e, field) => {
    setOtherAnswers({ ...otherAnswers, [field]: e.target.value });
  };

  const isFormComplete = Object.values(formState).every(value => value !== '');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      alert('Please fill out all required fields');
      return;
    }

    try {
      const response = await apiClient.post('/webapi/quote', {
        ...formState,
        coreFunctionality: formState.coreFunctionality === 'Others' ? otherAnswers.coreFunctionality : formState.coreFunctionality,
        timeline: formState.timeline === 'Others' ? otherAnswers.timeline : formState.timeline,
        source: formState.source === 'Others' ? otherAnswers.source : formState.source,
      });
      console.log('Form submitted:', response.data);
      alert('Quote form submitted successfully');
      // Optionally, you can reset the form state here
      setFormState({
        name: '',
        phone: '',
        email: '',
        organization: '',
        coreFunctionality: '',
        timeline: '',
        service: '',
        area: '',
        source: '',
      });
      setOtherAnswers({
        coreFunctionality: '',
        timeline: '',
        source: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting quote form');
    }
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get Quote</h1>
      <div style={styles.formContainer}>
        <form>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.question} htmlFor="name">Identify your name*</label>
              <input type="text" id="name" style={styles.input} placeholder="Full Name" onChange={(e) => handleInputChange(e, 'name')} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.question} htmlFor="phone">Phone Number*</label>
              <input type="tel" id="phone" style={styles.input} placeholder="Your Phone Number" onChange={(e) => handleInputChange(e, 'phone')} />
            </div>
          </div>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.question} htmlFor="email">Email Address*</label>
              <input type="email" id="email" style={styles.input} placeholder="Your Email" onChange={(e) => handleInputChange(e, 'email')} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.question} htmlFor="organization">Company/Organization's name*</label>
              <input type="text" id="organization" style={styles.input} placeholder="Your Answer" onChange={(e) => handleInputChange(e, 'organization')} />
            </div>
          </div>
        </form>
      </div>
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.question}>Identify the core functionality of your indoor facility*</label>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="healthcare" name="coreFunctionality" value="Healthcare Facility" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="healthcare" style={styles.radioInput}>Healthcare Facility</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="metro" name="coreFunctionality" value="Metro/Railways Stations" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="metro" style={styles.radioInput}>Metro/Railways Stations</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="academic" name="coreFunctionality" value="Academic Building/College/School" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="academic" style={styles.radioInput}>Academic Building/College/School</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="recreational" name="coreFunctionality" value="Recreational Space/Museum" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="recreational" style={styles.radioInput}>Recreational Space/Museum</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="shopping" name="coreFunctionality" value="Shopping Complex" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="shopping" style={styles.radioInput}>Shopping Complex</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="sports" name="coreFunctionality" value="Sports Arena" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="sports" style={styles.radioInput}>Sports Arena</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="government" name="coreFunctionality" value="Government Offices/Public Building/IT Parks" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
            <label htmlFor="government" style={styles.radioInput}>Government Offices/Public Building/IT Parks</label>
          </div>
          <div style={styles.rowWithTextArea}>
            <div style={styles.radioInputContainer}>
              <input type="radio" id="otherCoreFunctionality" name="coreFunctionality" value="Others" onChange={(e) => handleRadioChange(e, 'coreFunctionality')} />
              <label htmlFor="otherCoreFunctionality" style={styles.radioInput}>Others</label>
            </div>
            <textarea id="otherCoreFunctionalityAnswer" style={{ ...styles.textArea, ...styles.flexGrowTextArea }} placeholder="Your Answer" onChange={(e) => handleOtherAnswerChange(e, 'coreFunctionality')}></textarea>
          </div>
        </div>
      </div>
      <div style={styles.formContainer}>
  <div style={styles.formGroup}>
    <label style={styles.question}>Identify your expected timeline*</label>
    <div style={styles.radioInputContainer}>
      <input type="radio" id="within2weeks" name="timeline" value="Within 2 weeks" onChange={(e) => handleRadioChange(e, 'timeline')} />
      <label htmlFor="within2weeks" style={styles.radioInput}>Within 2 weeks</label>
    </div>
    <div style={styles.radioInputContainer}>
      <input type="radio" id="2to4weeks" name="timeline" value="2 to 4 weeks" onChange={(e) => handleRadioChange(e, 'timeline')} />
      <label htmlFor="2to4weeks" style={styles.radioInput}>2 to 4 weeks</label>
    </div>
    <div style={styles.radioInputContainer}>
      <input type="radio" id="1to3months" name="timeline" value="1 to 3 months" onChange={(e) => handleRadioChange(e, 'timeline')} />
      <label htmlFor="1to3months" style={styles.radioInput}>1 to 3 months</label>
    </div>
    <div style={styles.radioInputContainer}>
      <input type="radio" id="3to6months" name="timeline" value="3 to 6 months" onChange={(e) => handleRadioChange(e, 'timeline')} />
      <label htmlFor="3to6months" style={styles.radioInput}>3 to 6 months</label>
    </div>
    <div style={styles.rowWithTextArea}>
      <div style={styles.radioInputContainer}>
        <input type="radio" id="otherTimeline" name="timeline" value="Others" onChange={(e) => handleRadioChange(e, 'timeline')} />
        <label htmlFor="otherTimeline" style={styles.radioInput}>Others</label>
      </div>
      <div style={styles.flexGrowTextArea}>
        <input type="text" id="otherTimelineAnswer" style={styles.textArea} placeholder="Numeric value" pattern="[0-9]*" onChange={(e) => handleOtherAnswerChange(e, 'timeline')} />
      
      </div>
    </div>
  </div>
</div>

      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.question}>Service required*</label>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="interactiveMaps" name="service" value="Interactive Indoor Maps and Navigation" onChange={(e) => handleRadioChange(e, 'service')} />
            <label htmlFor="interactiveMaps" style={styles.radioInput}>Interactive Indoor Maps and Navigation</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="realTimeNavigation" name="service" value="Interactive Maps with Real-time Navigation" onChange={(e) => handleRadioChange(e, 'service')} />
            <label htmlFor="realTimeNavigation" style={styles.radioInput}>Interactive Maps with Real-time Navigation</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="otherMapBased" name="service" value="Other Map Based Application" onChange={(e) => handleRadioChange(e, 'service')} />
            <label htmlFor="otherMapBased" style={styles.radioInput}>Other Map Based Application</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="accessibilityNavigation" name="service" value="Accessibility Focused Indoor Navigation" onChange={(e) => handleRadioChange(e, 'service')} />
            <label htmlFor="accessibilityNavigation" style={styles.radioInput}>Accessibility Focused Indoor Navigation</label>
          </div>
        </div>
      </div>
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.question}>Identify your total indoor area (sum of each floor)*</label>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="lessThan5000" name="area" value="Less than 5,000 Sq. meter" onChange={(e) => handleRadioChange(e, 'area')} />
            <label htmlFor="lessThan5000" style={styles.radioInput}>Less than 5,000 Sq. meter</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="5000to10000" name="area" value="5,000 to 10,000 Sq. meters" onChange={(e) => handleRadioChange(e, 'area')} />
            <label htmlFor="5000to10000" style={styles.radioInput}>5,000 to 10,000 Sq. meters</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="10000to25000" name="area" value="10,000 to 25,000 Sq. meters" onChange={(e) => handleRadioChange(e, 'area')} />
            <label htmlFor="10000to25000" style={styles.radioInput}>10,000 to 25,000 Sq. meters</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="moreThan25000" name="area" value="More than 25,000 Sq. meters" onChange={(e) => handleRadioChange(e, 'area')} />
            <label htmlFor="moreThan25000" style={styles.radioInput}>More than 25,000 Sq. meters</label>
          </div>
        </div>
      </div>
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.question}>How did you come to know about IWAYPLUS*</label>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="internet" name="source" value="Internet" onChange={(e) => handleRadioChange(e, 'source')} />
            <label htmlFor="internet" style={styles.radioInput}>Internet</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="website" name="source" value="Our website" onChange={(e) => handleRadioChange(e, 'source')} />
            <label htmlFor="website" style={styles.radioInput}>Our website</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="socialNetwork" name="source" value="Social network" onChange={(e) => handleRadioChange(e, 'source')} />
            <label htmlFor="socialNetwork" style={styles.radioInput}>Social network</label>
          </div>
          <div style={styles.radioInputContainer}>
            <input type="radio" id="personalContacts" name="source" value="Personal contacts" onChange={(e) => handleRadioChange(e, 'source')} />
            <label htmlFor="personalContacts" style={styles.radioInput}>Personal contacts</label>
          </div>
          <div style={styles.rowWithTextArea}>
            <div style={styles.radioInputContainer}>
              <input type="radio" id="otherSource" name="source" value="Others" onChange={(e) => handleRadioChange(e, 'source')} />
              <label htmlFor="otherSource" style={styles.radioInput}>Others</label>
            </div>
            <textarea id="otherSourceAnswer" style={{ ...styles.textArea, ...styles.flexGrowTextArea }} placeholder="Your Answer" onChange={(e) => handleOtherAnswerChange(e, 'source')}></textarea>
          </div>
        </div>
      </div>
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label style={styles.question}>Are there any other details or service requests related to indoor maps and location-based services?</label>
          <textarea id="additionalDetails" style={styles.smallTextArea} rows="4" placeholder="Your Answer"></textarea>
        </div>
      </div>
      <div style={styles.specialContainer}>
        <button style={{ ...styles.submitButton, cursor: isFormComplete ? 'pointer' : 'not-allowed', opacity: isFormComplete ? 1 : 0.5 }} disabled={!isFormComplete} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quote;
