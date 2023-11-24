const PolicyService = {
    getFinancePolicies: () => {
      
      return [
        { id: 1, name: 'Finance Policy 1' },
        { id: 2, name: 'Finance Policy 2' },
      ];
    },
    getIndustryPolicies: () => {
      
      return [
        { id: 1, name: 'Industry Policy 1' },
        { id: 2, name: 'Industry Policy 2' },
      ];
    },
  };
  
  export default PolicyService;