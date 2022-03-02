import { css } from "@emotion/css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css as scss } from "styled-components";
import { AgentDetails } from "../components/AgentDetails";
import Sidebar from "../components/Sidebar";

interface OrganizationProps {
  isActive: boolean;
}

interface ItemsAgentsDetails {
  items: GetAgentsDetails[];
}
interface GetAgentsDetails {
  agent_id: number;
  branch: string;
  department: string;
  image: string;
  name: string;
  role: string;
  status: string;
}
[];

const Home: NextPage = () => {
  const [organizationStatus, setOrganizationStatus] = useState<boolean>(false);
  const [agents, getAgents] = useState<ItemsAgentsDetails>();

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await fetch("https://pp-api-desafio.herokuapp.com/agents");
      const data = await res.json();
      getAgents(data);
    };

    fetchAgents();
  }, []);

  return (
    <section className={css` position:relative;z-index:1;  background-color: #F8FAF9;`}>
      <Sidebar />
      <div
        className={css`
          margin: 0 23vw;
          padding-top: 90px;
          width: 75%;
          height: 100vh;
          overflow-y: hidden;
        
        `}
      >
        <h1>Organização</h1>
        <OrganizationContainer>
          <section
            className={css`
              width: 100%;
              border-bottom: 2.5px solid #eaefed;
            `}
          >
            <div
              className={css`
                display: flex;
                gap: 5px;
              `}
            >
              <Agents isActive={organizationStatus}>
                <span>Colaboradores</span>
              </Agents>
              <Positions isActive={true}>
                <span>Cargos</span>
              </Positions>
            </div>
          </section>

          <ListingOfAgents>
            <h4>Listagem de colaboradores</h4>
            <ListingOfAgentsDetails>
              <li>Nome Completo</li>
              <li>Departamento</li>
              <li>Cargo</li>
              <li>Unidade</li>
              <li>Status</li>
            </ListingOfAgentsDetails>
             {agents?.items === undefined ? 
             ( <>Um minuto...</>) : (
            agents?.items?.map((item) => (
              <AgentDetails
                userPhoto={item?.image}
                userName={item?.name}
                department={item?.department}
                position={item?.role}
                unit={item?.branch}
                status={item?.status}
              />

            )))}
          </ListingOfAgents>
        </OrganizationContainer>
      </div>
    </section>
  );
};

export default Home;

const OrganizationContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background: #ffffff;
  padding: 40px;
  height: 100vh;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
`;

const Agents = styled.div<OrganizationProps>(
  ({ isActive }) =>
    scss`      
    width: 200px;
    border-bottom:${isActive ? "2.5px solid #22E0A1" : "none"};
    text-align: center;
    padding-bottom: 10px;
    margin-bottom:-2.5px;
      span {
        font-weight: 600;
        color: ${isActive ? "#34423d" : "#A3B8B0"};
      }
      :hover {
        cursor: pointer;
      }
    `
);

const Positions = styled.div<OrganizationProps>(
  ({ isActive }) =>
    scss`
    width: 200px;
    border-bottom:${isActive ? "2.5px solid #22E0A1" : "none"};
    text-align: center;
    padding-bottom: 10px;
    margin-bottom:-2.5px;
      span {
        font-weight: 600;
        color: ${isActive ? "#34423d" : "#A3B8B0"};
      }
      :hover {
        cursor: pointer;
      }
    `
);
const ListingOfAgents = styled.section`
  overflow-y: scroll;
  height: 60vh;
  padding-right: 20px;
  ::-webkit-scrollbar {
    width: 8px; 
  
  }

  ::-webkit-scrollbar-track {
    background: #ffffff; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #22E0A1; 
    border-radius: 20px; 
    border: none;
   
  }
`;

const ListingOfAgentsDetails = styled.ul`
  border: 1px solid #cad6d1;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  list-style: none;
  padding: 12px;
  display: grid;
  grid-template-columns: 1.5fr 1.1fr 1fr 1.1fr 1.3fr;
  li {
    text-align: left;
    margin-left: -39px;
    padding-left: 40px;
  }
`;
