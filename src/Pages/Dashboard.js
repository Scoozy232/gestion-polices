import React, { useEffect, useState } from 'react';
import Header from '../components/UIComponents/Header';
import Footer from '../components/UIComponents/Footer';
import FinancePolicy from '../components/FeatureComponents/FinancePolicy';
import IndustryPolicy from '../components/FeatureComponents/IndustryPolicy';
import PolicyService from '../Services/PolicyService';

const Dashboard = () => {
  const [financePolicies, setFinancePolicies] = useState([]);
  const [industryPolicies, setIndustryPolicies] = useState([]);

  useEffect(() => {
    const fetchFinancePolicies = async () => {
      const policies = await PolicyService.getFinancePolicies();
      setFinancePolicies(policies);
    };

    const fetchIndustryPolicies = async () => {
      const policies = await PolicyService.getIndustryPolicies();
      setIndustryPolicies(policies);
    };

    fetchFinancePolicies();
    fetchIndustryPolicies();
  }, []);

  return (
    <div>
      <Header />
      <h2>Tableau de Bord</h2>
      <FinancePolicy policies={financePolicies} />
      <IndustryPolicy policies={industryPolicies} />
      <Footer />
    </div>
  );
};

export default Dashboard;