import React from 'react';
import Shahriyor1 from "../../components/Shahriyor/Page1"
import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Shahriyor2 from "../../components/Shahriyor/Page2"
export default () => {
  const content = useRoutes(routes);
  return <>
  <Shahriyor1/>
  {/* <Shahriyor2/> */}
  </>;
};
