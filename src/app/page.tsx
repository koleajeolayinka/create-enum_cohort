import Header from '../../components/shared/Header';
import CompanySection from '../../components/shared/CompanySection';
import CohortDashboard from "../../components/shared/CohortDashboard";
export default function Home() {
    return (
        <main>
            <Header/>
            <CompanySection/>
            <CohortDashboard/>
        </main>
    );
}
