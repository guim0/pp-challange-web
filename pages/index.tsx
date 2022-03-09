import { css } from "@emotion/css";
import type { NextPage } from "next";
import 'animate.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css as scss } from "styled-components";
import { AgentDetails } from "../components/AgentDetails";
import { RolesDetails } from "../components/RolesDetails";
import MoreIcon from "../assets/icons/more.svg";
import X from "../assets/icons/x.svg";
import Sidebar from "../components/Sidebar";

interface OrganizationProps {
  isActive?: boolean;
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

interface Roles {
  roles: GetRolesDetails[];
}
interface GetRolesDetails {
  name: string;
  departament: string;
  agents_quantity: 5;
}
const Home: NextPage = () => {
  const [organizationStatus, setOrganizationStatus] = useState<boolean>(false);
  const [agents, getAgents] = useState<ItemsAgentsDetails>();
  const [roles, getRoles] = useState<Roles>();
  const [homePage, setHomePage] = useState<string>("agents");
  const [categoryChosen, setCategoryChosen] = useState<boolean>(false);
  const [titleHome, setTitleHome] = useState<string>("");

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await fetch("https://pp-api-desafio.herokuapp.com/agents");
      const dataAgents = await res.json();
      getAgents(dataAgents);
      console.log("dataAgents =>>", dataAgents);
    };

    const featchRoles = async () => {
      const res = await fetch("https://pp-api-desafio.herokuapp.com/roles");
      const dataRoles = await res.json();
      getRoles(dataRoles);
    };

    fetchAgents();
    featchRoles();
  }, []);

  return (
    <main
      className={css`
        position: relative;
        z-index: 1;
        background-color: #f8faf9;
      `}
    >
      <Sidebar />
      {homePage === "agents" ? (
        <section
          className={css`
            margin: 0 22vw;
            padding-top: 90px;
            width: 75%;
            height: 100vh;
            overflow-y: hidden;

            @media screen and (max-width: 1200px) {
              margin: 0 auto;
            }
            @media screen and (max-width: 1200px) {
              width: 100%;
              margin-bottom: 100;

              padding-bottom: 100px;
            }
          `}
        >
          <TitleHomePage
            className={css`
              margin-left: 20px;
            `}
          >
            <h1
              className={css`
                @media screen and (max-width: 1200px) {
                  display: none;
                }
              `}
            >
              Organização
            </h1>
            <h1
              className={css`
                @media screen and (min-width: 1200px) {
                  display: none;
                }
                @media screen and (max-width: 1200px) {
                  display: block;
                }
              `}
            >
              {titleHome}
            </h1>
          </TitleHomePage>
          <OrganizationContainer>
            <div
              className={css`
                width: 100%;
              `}
            >
              <div
                className={css`
                  display: flex;
                  gap: 5px;
                  border-bottom: 3px solid #eaefed;
                  @media screen and (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                <Agents
                  onClick={() => {setHomePage("agents")}}
                  isActive={homePage === "agents" ?? true}  
                >
                  <span>Colaboradores</span>
                </Agents>
                <Positions
                  onClick={() =>{ setHomePage("roles")}}
                  isActive={homePage !== "agents" ?? true}  
                >
                  <span>Cargos</span>
                </Positions>
              </div>
            </div>
            <MobileChooseCategory>
              <CategoryChoose>
                <div
                  className={css`
                    display: flex;
                    justify-content: space-between;
                    padding: 15px;
                    width: 100%;
                    border-radius: 9px;
                    border: 2px solid #cad6d1;
                    background: #ffffff;
                    color: #34423d;
                    :hover {
                      cursor: pointer;
                    }
                  `}
                  onClick={() => setCategoryChosen(true)}
                >
                  Categorias <Image src={MoreIcon} alt="icon"/>
                </div>
                {categoryChosen && (
                  <>
                    <div
                      className={css`
                        background: #ffffff;
                        box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
                        border-radius: 12px 12px 0px 0px;
                        padding: 20px 20px;
                        margin-top: -70px;
                        position: relative;
                        z-index: 1;
                      `}
                    >
                      <div
                        className={css`
                          display: flex;
                          width: 100%;
                          align-items: center;
                          justify-content: space-between;
                        `}
                      >
                        <h1>Categorias</h1>
                        <div
                          className={css`
                            padding: 5px 30px;

                            :hover {
                              cursor: pointer;
                            }
                          `}
                          onClick={() => setCategoryChosen(false)}
                        >
                          <Image src={X} alt="Fechar"/>
                        </div>
                      </div>
                      <div>
                        <Category
                          onClick={() => {
                            setTitleHome("Colaboradores"),
                              setHomePage("agents");
                          }}
                        >
                          Colaboradores
                        </Category>
                        <Category
                          onClick={() => {
                            setTitleHome("Cargos"), setHomePage("roles");
                          }}
                        >
                          Cargos
                        </Category>
                      </div>
                    </div>
                  </>
                )}
              </CategoryChoose>
            </MobileChooseCategory>

            <ListingOfAgents>
              <h4>Listagem de colaboradores</h4>
              <ListingOfAgentsDetails >
                <li>Nome Completo</li>
                <li>Departamento</li>
                <li>Cargo</li>
                <li>Unidade</li>
                <li>Status</li>
              </ListingOfAgentsDetails>
              {agents?.items === undefined ? (
                <>Um minuto...</>
              ) : (
                agents?.items?.map((item) => (
                  <div >
                  <AgentDetails
                    userPhoto={item?.image}
                    userName={item?.name}
                    department={item?.department}
                    position={item?.role}
                    unit={item?.branch}
                    status={item?.status}
                  />
                  </div>
                ))
              )}
            </ListingOfAgents>
          </OrganizationContainer>
        </section>
      ) : (
        <section
          className={css`
            margin: 0 22vw;
            padding-top: 90px;
            width: 75%;
            height: 100vh;
            overflow-y: hidden;

            @media screen and (max-width: 1200px) {
              margin: 0 auto;
            }
            @media screen and (max-width: 1200px) {
              width: 100%;
              margin-bottom: 100;

              padding-bottom: 100px;
            }
          `}
        >
          <TitleHomePage
            className={css`
              margin-left: 20px;
            `}
          >
            <h1
              className={css`
                @media screen and (max-width: 1200px) {
                  display: none;
                }
              `}
            >
              Organização
            </h1>
            <h1
              className={css`
                @media screen and (min-width: 1200px) {
                  display: none;
                }
                @media screen and (max-width: 1200px) {
                  display: block;
                }
              `}
            >
              {titleHome}
            </h1>
          </TitleHomePage>
          <OrganizationContainer>
            <div
              className={css`
                width: 100%;
              `}
            >
              <div
                className={css`
                  display: flex;
                  gap: 5px;

                  border-bottom: 3px solid #eaefed;
                  @media screen and (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                <Agents
                  onClick={() => setHomePage("agents")}
                  isActive={organizationStatus}
                >
                  <span>Colaboradores</span>
                </Agents>
                <Positions onClick={() => setHomePage("roles")} isActive={true}>
                  <span>Cargos</span>
                </Positions>
              </div>
              <MobileChooseCategory>
                <CategoryChoose>
                  <div
                    className={css`
                      display: flex;
                      justify-content: space-between;
                      padding: 15px;
                      width: 100%;
                      border-radius: 9px;
                      border: 2px solid #cad6d1;
                      background: #ffffff;
                      color: #34423d;
                      :hover {
                        cursor: pointer;
                      }
                    `}
                    onClick={() => setCategoryChosen(true)}
                  >
                    Categorias <Image src={MoreIcon} alt="icon" />
                  </div>
                  {categoryChosen && (
                    <>
                      <div
                        className={css`
                          background: #ffffff;
                          box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
                          border-radius: 12px 12px 0px 0px;
                          padding: 20px 20px;
                          margin-top: -70px;
                          position: relative;
                          z-index: 1;
                          
                        ` }
                      >
                        <div
                          className={css`
                            display: flex;
                            width: 100%;
                            align-items: center;
                            justify-content: space-between;
                          `}
                        >
                          <h1>Categorias</h1>
                          <div
                            className={css`
                              padding: 5px 30px;
                              :hover {
                                cursor: pointer;
                              }
                            `}
                            onClick={() => setCategoryChosen(false)}
                          >
                            <Image src={X} alt="fechar" />
                          </div>
                        </div>
                        <div>
                          <Category
                            onClick={() => {
                              setTitleHome("Colaboradores"),
                                setHomePage("agents");
                            }}
                          >
                            Colaboradores
                          </Category>
                          <Category
                            onClick={() => {
                              setTitleHome("Cargos"), setHomePage("roles");
                            }}
                          >
                            Cargos
                          </Category>
                        </div>
                      </div>
                    </>
                  )}
                </CategoryChoose>
              </MobileChooseCategory>
            </div>
            <ListingOfAgents>
              <h4>Listagem de colaboradores</h4>
              <ListingOfRolesDetails>
                <li>Cargo</li>
                <li>Departamento</li>
                <li>Colaboradores</li>
              </ListingOfRolesDetails>
              {agents?.items === undefined ? (
                <> Um minuto...</>
              ) : (
                roles?.roles?.map((item) => (
                  <RolesDetails
                    position={item?.name}
                    departament={item?.departament}
                    collaborators={item?.agents_quantity}
                  />
                ))
              )}
            </ListingOfAgents>
          </OrganizationContainer>
        </section>
      )}
    </main>
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
  height: 100vh;
  padding-bottom: 400px;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #22e0a1;
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

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const ListingOfRolesDetails = styled.ul`
  border: 1px solid #cad6d1;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  list-style: none;
  padding: 12px;
  display: grid;
  grid-template-columns: 5fr 5fr 7fr 1fr;
  li {
    text-align: left;
    margin-left: -39px;
    padding-left: 40px;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const MobileChooseCategory = styled.section`
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    display: block;
    display: flex;

    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 3px solid #eaefed;
  }
`;

const CategoryChoose = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Category = styled.option`
  padding-top: 20px;
  padding-top: 20px;
  :hover {
    cursor: pointer;
  }
`;

const TitleHomePage = styled.header``