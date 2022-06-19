import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Smart Contract Test</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Unit Testing with Javascript Libraries</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Build stable and secure systems to translate dense technical
                topics to stakeholders less versed with blockchain applications.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li> */}
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Smart Contract DEvelopment</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design, Implement Write And Maintain well structured Smart Contracts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Resolve problems, improve operations and provide exceptional
                services
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaborate with team members to achieve target results</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Create plans and communicate deadlines to complete projects on
                time.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Work within applicable standards, policies and regulatory
                guidelines to promote safe working environment.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Participate in continuous improvement by generating suggestions,
                engaging in problem-solving activities to support teamwork.
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Smart Contract Audit</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Audit smart contracts with advanced auditing tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensure maximum security in smart contracts</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
