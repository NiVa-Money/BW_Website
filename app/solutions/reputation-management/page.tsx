'use client'

import { useRouter } from "next/router";
import SolutionSection from "../../components/SolutionCard";

const ReputationManagementPage = () => {
  const router = useRouter();

  return (
    <>
      <SolutionSection router={router} />
    </>
  );
};

export default ReputationManagementPage;
