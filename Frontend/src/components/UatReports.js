import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTestRecord } from "../services/api"


const UatReports = () => {

    const  { appName } = useParams()
    const [records, setRecords] = useState()

    const fetchData = async () => {
        let response = await getTestRecord(appName)
        setRecords(response.data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {JSON.stringify(records)}
        </div>
    )
}

export default UatReports