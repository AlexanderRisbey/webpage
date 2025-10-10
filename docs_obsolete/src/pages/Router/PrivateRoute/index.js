// import React, { useEffect, useState } from 'react';
// import { Route, Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useSelector, shallowEqual } from 'react-redux';
// import PropTypes from 'prop-types';
// /* eslint-disable */
// // import Layout from 'components/Layout';
// import paths from '../paths';
// import Nav from '../../../components/nav';
// import Stats from '../../../components/stats';
// //import { useChats } from '../../../hooks/useChats';

// const PrivateRoute = ({ path, component: Component }) => {
//   const { id } = useSelector(
//     state => ({
//       id: state.auth.userData.id
//     }),
//     shallowEqual
//   );

//   const location = useLocation();
//   const [showStats, setShowStats] = useState(true);

//   useEffect(() => {
//     // Show Stats unless the path is "/settings"
//     setShowStats(location.pathname !== "/settings");
//   }, [location]);

//   console.log("..........................",path, Component)
// //   id? useChats() : null;
//     console.log(id)
//     return id ? (
//       <div className='holder'>
//         <Nav />
//         <Outlet />
//         {location.pathname !== "/settings" && <Stats />}
//       </div>
//     )
//     : <Navigate to="/login" />
// };

// PrivateRoute.propType = {
//   path: PropTypes.string.isRequired,
//   component: PropTypes.element.isRequired
// };

// export default PrivateRoute;
