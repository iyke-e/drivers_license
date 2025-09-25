import React from 'react'
import ApplicationBody from '../../../components/layouts/admin/body/ApplicationBody'
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import MetricsCard from '../../../components/admin/MetricsCard'
import Table from "../../../components/admin/Table";
import { newApplicantsColumns, newApplicantsData } from "./data";


const NewApplicants = () => {

  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('New Applicant')
  }, [])

  return (
    <ApplicationBody
      metricsCard={
        <MetricsCard
          title={"Total New Applicant"}
          type={"new"}
          currentTotal={40689}
          prevTotal={40000}

        />
      }
      table={<Table tableData={newApplicantsData} cols={newApplicantsColumns} title="New Applicants" />}
      chart={"chart should be here"}
    />
  )
}


export default NewApplicants;
