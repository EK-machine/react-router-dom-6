import headerStyles from "../components/Header/styles.module.css";

export const actNav = ({ isActive }: { isActive: boolean }) =>
  isActive ? headerStyles.navlinkActive : headerStyles.navlink;
