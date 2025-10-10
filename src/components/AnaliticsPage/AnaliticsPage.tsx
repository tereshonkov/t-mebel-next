import UsersDaily from "@/components/DashboardAnalitics/UsersDaily";
import UsersMonthly from "@/components/DashboardAnalitics/UsersMonthly";
import UsersCall from "@/components/DashboardAnalitics/UsersCall";
import UsersRouts from "@/components/DashboardAnalitics/UsersRouts";
import UsersLastReview from "@/components/DashboardAnalitics/UsersLastReview";
import UsersDiagramm from "@/components/DashboardAnalitics/UsersDiagramm";
import Calendar from "../DashboardAnalitics/Calendar";
import Grid from "@mui/material/Grid";

export default function AnaliticsPage() {
  return (
    <Grid container spacing={2}>
      <UsersDaily />
      <UsersMonthly />
      <UsersCall />
      <UsersDiagramm />
      <Calendar />
      <UsersRouts />
      <UsersLastReview />
    </Grid>
  );
}
