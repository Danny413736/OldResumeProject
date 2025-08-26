import './App.css';
import App from './App';
import { jsPDF } from "jspdf"; 
import React, { useState, useEffect } from 'react';
import { generateResume } from './aiService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#29117eff', 
      minHeight: '100vh',
      paddingTop: '50px',
      color: 'white'
    }}>
      <h1 style ={{ marginBottom: '20px'}}>Resume Builder Project</h1>
      <p style = {{marginBottom: '160px'}}>Click on one of the options to start.</p>
      <Link to="/screen1">
        <button style={buttonStyle('#db3c3cff')}>Start creating a new Resume</button>
      </Link>
    </div>
  );
}

function Screen1() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');

  // Load saved data when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('userNameData');
    if (savedData) {
      const { firstName, middleName, lastName, birthday, email } = JSON.parse(savedData);
      setFirstName(firstName || '');
      setMiddleName(middleName || '');
      setLastName(lastName || '');
      setBirthday(birthday || '');
      setEmail(email || '');
    }
  }, []);

  // Save to localStorage whenever any field changes
  const updateLocalStorage = (key, value) => {
    const currentData = {
      firstName,
      middleName,
      lastName,
      birthday,
      email,
      [key]: value
    };
    localStorage.setItem('userNameData', JSON.stringify(currentData));
  };

  const buttonStyle = (bgColor) => ({
    backgroundColor: bgColor,
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px'
  });

  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#29117eff',
      minHeight: '100vh',
      paddingTop: '50px',
      color: 'white'
    }}>
      <h1>Basic Credentials</h1>

      <p style={{ marginBottom: '20px' }}>First Name:</p>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
          updateLocalStorage('firstName', e.target.value);
        }}
        placeholder="Enter your first name"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <p>Middle Name (Optional):</p>
      <input
        type="text"
        value={middleName}
        onChange={(e) => {
          setMiddleName(e.target.value);
          updateLocalStorage('middleName', e.target.value);
        }}
        placeholder="Enter your middle name"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <p>Last Name:</p>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
          updateLocalStorage('lastName', e.target.value);
        }}
        placeholder="Enter your last name"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <p>Birthday:</p>
      <input
        type="text"
        value={birthday}
        onChange={(e) => {
          setBirthday(e.target.value);
          updateLocalStorage('birthday', e.target.value);
        }}
        placeholder="Enter your birthday"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <p>Email:</p>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          updateLocalStorage('email', e.target.value);
        }}
        placeholder="Enter your email"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <p></p>

      <Link to="/screen3">
        <button style={buttonStyle('#db3c3cff')}>Continue</button>
      </Link>
    </div>
  );
}

function Screen2() {

  const [email, setEmail] = useState('');

  const [birthday, setBirthday] = useState('');

  const [gpa, setGPA] = useState('');

 

  // Load saved data when the component mounts

  useEffect(() => {

    const savedData = localStorage.getItem('userExtraData');

    if (savedData) {

      const { email, birthday, gpa } = JSON.parse(savedData);

      setEmail(email || '');

      setBirthday(birthday || '');

      setGPA(gpa || '');

    }

  }, []);

 

  // Save to localStorage whenever any field changes

  const updateLocalStorage = (key, value) => {

    const currentData = {

      email,

      birthday,

      gpa,

      [key]: value

    };

    localStorage.setItem('userExtraData', JSON.stringify(currentData));

  };

 

  const buttonStyle = (bgColor) => ({

    backgroundColor: bgColor,

    color: 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    marginTop: '20px'

  });

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>Other Required Information</h1>

 

      <p>Enter your email here</p>

      <input

        type="text"

        value={email}

        onChange={(e) => {

          setEmail(e.target.value);

          updateLocalStorage('email', e.target.value);

        }}

        placeholder="Enter your email"

        style={{

          padding: '10px',

          fontSize: '16px',

          marginBottom: '20px',

          borderRadius: '5px',

          border: '1px solid #ccc'

        }}

      />

 

      <p>Enter your birthday here</p>

      <input

        type="text"

        value={birthday}

        onChange={(e) => {

          setBirthday(e.target.value);

          updateLocalStorage('birthday', e.target.value);

        }}

        placeholder="Enter your birthday"

        style={{

          padding: '10px',

          fontSize: '16px',

          marginBottom: '20px',

          borderRadius: '5px',

          border: '1px solid #ccc'

        }}

      />

 

      <p>Enter your GPA here</p>

      <input

        type="text"

        value={gpa}

        onChange={(e) => {

          setGPA(e.target.value);

          updateLocalStorage('gpa', e.target.value);

        }}

        placeholder="Enter your GPA"

        style={{

          padding: '10px',

          fontSize: '16px',

          marginBottom: '20px',

          borderRadius: '5px',

          border: '1px solid #ccc'

        }}

      />

      <p></p>

      <Link to="/screen3">

        <button style={buttonStyle('#db3c3cff')}>Continue</button>

      </Link>

    </div>

  );

}

function Screen3() {

  const [selectedEducation, setSelectedEducation] = useState('');

 

  // Load saved selection when the component mounts

  useEffect(() => {

    const savedSelection = localStorage.getItem('educationChoice');

    if (savedSelection) {

      setSelectedEducation(savedSelection);

    }

  }, []);

 

  // Save selection to localStorage

  const handleSelection = (choice) => {

    setSelectedEducation(choice);

    localStorage.setItem('educationChoice', choice);

  };

 

  const buttonStyle = (bgColor, isSelected) => ({

    backgroundColor: bgColor,

    color: isSelected ? '#000' : 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: isSelected ? '3px solid white' : 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    margin: '10px'

  });

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>Education</h1>

      <p>Are you in High School or are you in a College/University?</p>

 

      <Link to="/HighSchool">

        <button

          style={buttonStyle('#f2c586ff', selectedEducation === 'HighSchool')}

          onClick={() => handleSelection('HighSchool')}

        >

          HighSchool

        </button>

      </Link>

 

      <Link to="/College">

        <button

          style={buttonStyle('#79d5efff', selectedEducation === 'College')}

          onClick={() => handleSelection('College')}

        >

          College/University

        </button>

      </Link>

    </div>

  );

}

function Screen11() {

  const [selectedGrade, setSelectedGrade] = useState('');

 

  useEffect(() => {

    const savedGrade = localStorage.getItem('highSchoolGrade');

    if (savedGrade) {

      setSelectedGrade(savedGrade);

    }

  }, []);

 

  const handleGradeSelection = (grade) => {

    setSelectedGrade(grade);

    localStorage.setItem('highSchoolGrade', grade);

  };

 

  const buttonStyle = (bgColor, isSelected) => ({

    backgroundColor: bgColor,

    color: isSelected ? '#000' : 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: isSelected ? '3px solid white' : 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    margin: '10px'

  });

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>High School Education</h1>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#db3c3cff', selectedGrade === 'Freshman')}

          onClick={() => handleGradeSelection('Freshman')}

        >

          Freshman

        </button>

      </Link>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#f4c45dff', selectedGrade === 'Sophomore')}

          onClick={() => handleGradeSelection('Sophomore')}

        >

          Sophomore

        </button>

      </Link>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#c47028ff', selectedGrade === 'Junior')}

          onClick={() => handleGradeSelection('Junior')}

        >

          Junior

        </button>

      </Link>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#44e63bff', selectedGrade === 'Senior')}

          onClick={() => handleGradeSelection('Senior')}

        >

          Senior

        </button>

      </Link>

    </div>

  );

}

function Screen12() {

  const [selectedYears, setSelectedYears] = useState('');

 

  useEffect(() => {

    const savedYears = localStorage.getItem('collegeYears');

    if (savedYears) {

      setSelectedYears(savedYears);

    }

  }, []);

 

  const handleYearsSelection = (years) => {

    setSelectedYears(years);

    localStorage.setItem('collegeYears', years);

  };

 

  const buttonStyle = (bgColor, isSelected) => ({

    backgroundColor: bgColor,

    color: isSelected ? '#000' : 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: isSelected ? '3px solid white' : 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    margin: '10px'

  });

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1 style={{ marginBottom: '180px' }}>College Education</h1>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#db3c3cff', selectedYears === '0-2')}

          onClick={() => handleYearsSelection('0-2')}

        >

          0–2 year(s)

        </button>

      </Link>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#f4c45dff', selectedYears === '3-4')}

          onClick={() => handleYearsSelection('3-4')}

        >

          3–4 years

        </button>

      </Link>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#c47028ff', selectedYears === '5-7')}

          onClick={() => handleYearsSelection('5-7')}

        >

          5–7 years

        </button>

      </Link>

 

      <Link to="/schoolpt2">

        <button

          style={buttonStyle('#44e63bff', selectedYears === '8+')}

          onClick={() => handleYearsSelection('8+')}

        >

          8+ years

        </button>

      </Link>

    </div>

  );

}

function Screen13() {
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');
  const [gpa, setGPA] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('userEducationData');
    if (savedData) {
      const { major, school, gpa } = JSON.parse(savedData);
      setMajor(major || '');
      setSchool(school || '');
      setGPA(gpa || '');
    }
  }, []);

  const updateLocalStorage = (key, value) => {
    const currentData = {
      major,
      school,
      gpa,
      [key]: value
    };
    localStorage.setItem('userEducationData', JSON.stringify(currentData));
  };

  const buttonStyle = (bgColor) => ({
    backgroundColor: bgColor,
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px'
  });

  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#29117eff',
      minHeight: '100vh',
      paddingTop: '50px',
      color: 'white'
    }}>
      <h1 style={{ marginBottom: '40px' }}>Additional Education Requirements</h1>

      <p style={{ fontSize: '20px' }}>Major:</p>
      <input
        type="text"
        value={major}
        onChange={(e) => {
          setMajor(e.target.value);
          updateLocalStorage('major', e.target.value);
        }}
        placeholder="Enter your current major"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <p>Targeted College:</p>
      <input
        type="text"
        value={school}
        onChange={(e) => {
          setSchool(e.target.value);
          updateLocalStorage('school', e.target.value);
        }}
        placeholder="Enter your current school"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <p>GPA:</p>
      <input
        type="text"
        value={gpa}
        onChange={(e) => {
          setGPA(e.target.value);
          updateLocalStorage('gpa', e.target.value);
        }}
        placeholder="Enter your GPA"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <p></p>
      <Link to="/screen4">
        <button style={buttonStyle('#db3c3cff')}>Continue</button>
      </Link>
    </div>
  );
}

function Screen4() {

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff', // Light blue background

      minHeight: '100vh',         // Full screen height

      paddingTop: '50px',

      color: 'white'              // White text

    }}>

    <h1 style = {{marginBottom: '170px'}}>

      Have you ever had a job?:

    </h1>

 

    <Link to="/screen8">

        <button style={buttonStyle('#db3c3cff')}> I have no Experience </button>

      </Link>

 

    <Link to="/screen5">

        <button style={buttonStyle('#44e63bff')}> Yes, I have worked </button>

      </Link>

    </div>

  );

}

function Screen5() {

  const [organizationjob1, setOrganizationJob1] = useState('');

  const [roleName1, setRoleName1] = useState('');

  const [startDate1, setStartDate1] = useState('');

  const [endDate1, setEndDate1] = useState('');

  const [jobDescription1, setJobDescription1] = useState('');

  const [jobLocation1, setJobLocation1] = useState('');

 

  // Load saved data when the component mounts

  useEffect(() => {

    const savedData = localStorage.getItem('jobExperienceData');

    if (savedData) {

      const {

        organizationjob1,

        roleName1,

        startDate1,

        endDate1,

        jobDescription1,

        jobLocation1

      } = JSON.parse(savedData);

      setOrganizationJob1(organizationjob1 || '');

      setRoleName1(roleName1 || '');

      setStartDate1(startDate1 || '');

      setEndDate1(endDate1 || '');

      setJobDescription1(jobDescription1 || '');

      setJobLocation1(jobLocation1 || '');

    }

  }, []);

 

  // Save to localStorage whenever any field changes

  const updateLocalStorage = (key, value) => {

    const currentData = {

      organizationjob1,

      roleName1,

      startDate1,

      endDate1,

      jobDescription1,

      jobLocation1,

      [key]: value

    };

    localStorage.setItem('jobExperienceData', JSON.stringify(currentData));

  };

 

  const buttonStyle = (bgColor) => ({

    backgroundColor: bgColor,

    color: 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    margin: '20px'

  });

 

  const inputStyle = {

    padding: '50px',

    fontSize: '18px',

    width: '300px',

    margin: '20px',

    borderRadius: '5px',

    border: '1px solid #ccc',

    margin: '20px'
  };

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white',

    }}>

      <h1>Before we get started...</h1>

      <h2>

        To build an accurate resume, we need information on your past occupations along with any skills or experience you have.

      </h2>

 

      <input

        type="text"

        value={organizationjob1}

        onChange={(e) => {

          setOrganizationJob1(e.target.value);

          updateLocalStorage('organizationjob1', e.target.value);

        }}

        placeholder="Insert Organization Here"

        style={inputStyle}

      />

 

      <input

        type="text"

        value={roleName1}

        onChange={(e) => {

          setRoleName1(e.target.value);

          updateLocalStorage('roleName1', e.target.value);

        }}

        placeholder="Insert Role Here"

        style={inputStyle}

      />

 

      <input

        type="text"

        value={startDate1}

        onChange={(e) => {

          setStartDate1(e.target.value);

          updateLocalStorage('startDate1', e.target.value);

        }}

        placeholder="Insert Start Date Here"

        style={inputStyle}

      />

 

      <input

        type="text"

        value={endDate1}

        onChange={(e) => {

          setEndDate1(e.target.value);

          updateLocalStorage('endDate1', e.target.value);

        }}

        placeholder="Insert End Date Here"

        style={inputStyle}

      />

 

      <input

        type="text"

        value={jobDescription1}

        onChange={(e) => {

          setJobDescription1(e.target.value);

          updateLocalStorage('jobDescription1', e.target.value);

        }}

        placeholder="Insert Job Description Here"

        style={inputStyle}

      />

 

      <input

        type="text"

        value={jobLocation1}

        onChange={(e) => {

          setJobLocation1(e.target.value);

          updateLocalStorage('jobLocation1', e.target.value);

        }}

        placeholder="Insert Job Location Here"

        style={inputStyle}

      />

      <p></p>

      <Link to="/screen6">

        <button style={buttonStyle('#db3c3cff')}>Continue</button>

      </Link>

    </div>

  );

}

function Screen6() {

 

  return (

 

    <div style={{

 

      textAlign: 'center',

 

      backgroundColor: '#29117eff', // Light blue background

 

      minHeight: '100vh',         // Full screen height

 

      paddingTop: '50px',

 

      color: 'white'              // White text

 

    }}>

 

    <h1>

 

      One last thing...

 

    </h1>

 

    <h3>

      Do you have any Work Certificates?

    </h3>

 

    <Link to="/screen7">

 

        <button style={buttonStyle('#db3c3cff')}>Yes</button>

 

      </Link>

   

    <Link to="/screen9">

 

        <button style={buttonStyle('#38EA76')}>No</button>

 

      </Link>

 

    </div>

 

  );

 

}

function Screen7() {

  const [organizationName1, setOrganizationName1] = useState('');

  const [titleName1, setTitleName1] = useState('');

 

  // Load saved data when the component mounts

  useEffect(() => {

    const savedData = localStorage.getItem('certificateData');

    if (savedData) {

      const { organizationName1, titleName1 } = JSON.parse(savedData);

      setOrganizationName1(organizationName1 || '');

      setTitleName1(titleName1 || '');

    }

  }, []);

 

  // Save to localStorage whenever any field changes

  const updateLocalStorage = (key, value) => {

    const currentData = {

      organizationName1,

      titleName1,

      [key]: value

    };

    localStorage.setItem('certificateData', JSON.stringify(currentData));

  };

 

  const buttonStyle = (bgColor) => ({

    backgroundColor: bgColor,

    color: 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    margin: '20px'

  });

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>Certificates</h1>

 

      <input

        type="text"

        value={organizationName1}

        onChange={(e) => {

          setOrganizationName1(e.target.value);

          updateLocalStorage('organizationName1', e.target.value);

        }}

        placeholder="Insert Organization Here"

        style={{

          padding: '50px',

          fontSize: '18px',

          width: '300px',

          margin: '20px 0',

          borderRadius: '5px',

          border: '1px solid #ccc'

        }}

      />

      <p></p>

      <input

        type="text"

        value={titleName1}

        onChange={(e) => {

          setTitleName1(e.target.value);

          updateLocalStorage('titleName1', e.target.value);

        }}

        placeholder="Insert Title Here"

        style={{

          padding: '50px',

          fontSize: '18px',

          width: '300px',

          margin: '20px',

          borderRadius: '5px',

          border: '1px solid #ccc'

        }}

      />

      <p></p>

      <Link to="/screen15">

        <button style={buttonStyle('#db3c3cff')}>Another Certificate</button>

      </Link>

 

      <Link to="/screen9">

        <button style={buttonStyle('#db3c3cff')}>Next</button>

      </Link>

    </div>

  );

}

function Screen8() {

 

  return (

 

    <div style={{

 

      textAlign: 'center',

 

      backgroundColor: '#29117eff', // Light blue background

 

      padding: '50px',

 

      borderRadius: '10px',

 

      minHeight: '100vh',         // Full screen height

 

      paddingTop: '50px',

 

      color: 'white'  // White text

 

    }}>

 

    <h1>

 

      No Experience? No Problem!

 

    </h1>

 

    <h4>

      We want to provide everyone with a suitable Resume for their career paths.

    </h4>

 

    <h4>

      Let us continue to help!

    </h4>

 

    <Link to="/screen9">

 

        <button style={buttonStyle('#db3c3cff')}>Press HERE To Continue</button>

 

      </Link>

 

      <Link to="/screen7">

 

        <button style={buttonStyle('#db3c3cff')}>Go Back</button>

 

      </Link>

 

   

   

 

    </div>

 

  );

 

}

function Screen9() {

  const [skillList1, setSkillList1] = useState('');

  const [skillList2, setSkillList2] = useState('');

 

  // Load saved data when the component mounts

  useEffect(() => {

    const savedData = localStorage.getItem('skillsData');

    if (savedData) {

      const { skillList1, skillList2 } = JSON.parse(savedData);

      setSkillList1(skillList1 || '');

      setSkillList2(skillList2 || '');

    }

  }, []);

  // Save to localStorage whenever any field changes

  const updateLocalStorage = (key, value) => {

    const currentData = {

      skillList1,

      skillList2,

      [key]: value

    };

    localStorage.setItem('skillsData', JSON.stringify(currentData));

  };

 

  const buttonStyle = (bgColor) => ({

    backgroundColor: bgColor,

    color: 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    marginTop: '20px'

  });

 

  const inputStyle = {

    padding: '50px',

    fontSize: '18px',

    width: '300px',

    margin: '20px 0',

    borderRadius: '5px',

    border: '1px solid #ccc'

  };

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      minWidth: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>Provide Any/All Skills You Have!</h1>

      <h5>This will help us create a Resume that highlights your skills and abilities.</h5>

      <h2>List Your Skills Below!</h2>

 

      <h3>Skill #1</h3>

      <input

        type="text"

        value={skillList1}

        onChange={(e) => {

          setSkillList1(e.target.value);

          updateLocalStorage('skillList1', e.target.value);

        }}

        placeholder="Insert Skill Here"

        style={inputStyle}

      />

 

      <h3>Skill #2</h3>

      <input

        type="text"

        value={skillList2}

        onChange={(e) => {

          setSkillList2(e.target.value);

          updateLocalStorage('skillList2', e.target.value);

        }}

        placeholder="Insert Skill Here"

        style={inputStyle}

      />

 

      <h6>Ready To Move On?</h6>

 

      <Link to="/screen14">

        <button style={buttonStyle('#db3c3cff')}>More Skills</button>

      </Link>

      <p></p>

      <Link to="/screen10">
        <button style={{ ...buttonStyle('#db3c3cff'), marginBottom: '20px' }}>
          Done
        </button>
      </Link>

      
    </div>

  );

}

function Screen10() {
  const [resumeText, setResumeText] = useState('');


  const handleDownloadPDF = (text) => {
    const doc = new jsPDF();
    const marginLeft = 10;
    const marginTop = 10;
    const lineHeight = 10;


    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);


    const lines = doc.splitTextToSize(text, 180);
    lines.forEach((line, index) => {
      doc.text(line, marginLeft, marginTop + index * lineHeight);
    });


    doc.save('resume.pdf');
  };


  const handleGenerateResume = async () => {
  const userData = {
    ...JSON.parse(localStorage.getItem('userNameData') || '{}'),
    ...JSON.parse(localStorage.getItem('userExtraData') || '{}'),
    ...JSON.parse(localStorage.getItem('userEducationData') || '{}'),
    ...JSON.parse(localStorage.getItem('jobExperienceData') || '{}'),
    ...JSON.parse(localStorage.getItem('certificateData') || '{}'),
    ...JSON.parse(localStorage.getItem('extraCertificateData') || '{}'),
    ...JSON.parse(localStorage.getItem('skillsData') || '{}'),
    ...JSON.parse(localStorage.getItem('additionalSkillsData') || '{}'),
    educationChoice: localStorage.getItem('educationChoice'),
    highSchoolGrade: localStorage.getItem('highSchoolGrade'),
    collegeYears: localStorage.getItem('collegeYears'),
  };


  try {
    const response = await generateResume(userData);
    console.log("Full response:", response);


    let resume = "";


    if (
      response &&
      response.choices &&
      Array.isArray(response.choices) &&
      response.choices.length > 0 &&
      response.choices[0].message &&
      response.choices[0].message.content
    ) {
      resume = response.choices[0].message.content;
    } else if (typeof response === "string") {
      resume = response;
    } else {
      console.error("Unexpected response format:", response);
      alert("Resume generation failed due to unexpected response format.");
      return;
    }


    setResumeText(resume);
    handleDownloadPDF(resume);
    alert("Resume generated and downloaded as PDF!");
  } catch (error) {
    console.error("Error generating resume:", error);
    alert("Something went wrong while generating your resume.");
  }
};

  const buttonStyle = (bgColor) => ({
    padding: '40px 40px',
    fontSize: '30px',
    backgroundColor: bgColor,
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    margin: '20px'
  });

  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#29117eff',
      minHeight: '100vh',
      paddingTop: '50px',
      color: 'white'
    }}>
      <h1>Great! You are all set to create your Resume!</h1>
      <h5 style={{ color: '#fafafaff' }}>
        Now that we have valid information, we can now get started on drafting your brand new resume!
      </h5>
      <h2 style={{ color: '#FF0000' }}>
        Please give us a moment to prepare your Resume
      </h2>

      <button style={buttonStyle('#db3c3cff')} onClick={handleGenerateResume}>
        Generate My Resume with AI
      </button>
    </div>
  );
}

function Screen14() {

  const [skillList3, setSkillList3] = useState('');

  const [skillList4, setSkillList4] = useState('');

 

  // Load saved data when the component mounts

  useEffect(() => {

    const savedData = localStorage.getItem('additionalSkillsData');

    if (savedData) {

      const { skillList3, skillList4 } = JSON.parse(savedData);

      setSkillList3(skillList3 || '');

      setSkillList4(skillList4 || '');

    }

  }, []);

 

  // Save to localStorage whenever any field changes

  const updateLocalStorage = (key, value) => {

    const currentData = {

      skillList3,

      skillList4,

      [key]: value

    };

    localStorage.setItem('additionalSkillsData', JSON.stringify(currentData));

  };

 

  const buttonStyle = (bgColor) => ({

    backgroundColor: bgColor,

    color: 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    marginTop: '20px'

  });

 

  const inputStyle = {

    padding: '50px',

    fontSize: '18px',

    width: '300px',

    margin: '20px 0',

    borderRadius: '5px',

    border: '1px solid #ccc'

  };

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>Another Skill? No Problem!</h1>

      <h5>We can add as many skills as you want!</h5>

      <h5>Just click the button below to add more skills.</h5>

 

      <h6>Skill #3</h6>

      <input

        type="text"

        value={skillList3}

        onChange={(e) => {

          setSkillList3(e.target.value);

          updateLocalStorage('skillList3', e.target.value);

        }}

        placeholder="Insert Skill Here"

        style={inputStyle}

      />

 

      <h6>Skill #4</h6>

      <input

        type="text"

        value={skillList4}

        onChange={(e) => {

          setSkillList4(e.target.value);

          updateLocalStorage('skillList4', e.target.value);

        }}

        placeholder="Insert Skill Here"

        style={inputStyle}

      />

 

      <h6>Ready To Move On?</h6>


 

      <Link to="/screen10">

        <button style={buttonStyle('#db3c3cff')}>All Done With Skills!</button>

      </Link>

    </div>

  );

}

function Screen15() {

  const [organizationName2, setOrganizationName2] = useState('');

  const [titleName2, setTitleName2] = useState('');

 

  // Load saved data when the component mounts

  useEffect(() => {

    const savedData = localStorage.getItem('extraCertificateData');

    if (savedData) {

      const { organizationName2, titleName2 } = JSON.parse(savedData);

      setOrganizationName2(organizationName2 || '');

      setTitleName2(titleName2 || '');

    }

  }, []);

 

  // Save to localStorage whenever any field changes

  const updateLocalStorage = (key, value) => {

    const currentData = {

      organizationName2,

      titleName2,

      [key]: value

    };

    localStorage.setItem('extraCertificateData', JSON.stringify(currentData));

  };

 

  const buttonStyle = (bgColor) => ({

    backgroundColor: bgColor,

    color: 'white',

    padding: '10px 20px',

    fontSize: '16px',

    border: 'none',

    borderRadius: '5px',

    cursor: 'pointer',

    marginTop: '20px'

  });

 

  const inputStyle = {

    padding: '50px',

    fontSize: '18px',

    width: '300px',

    margin: '20px',

    borderRadius: '5px',

    border: '1px solid #ccc'

  };

 

  return (

    <div style={{

      textAlign: 'center',

      backgroundColor: '#29117eff',

      minHeight: '100vh',

      paddingTop: '50px',

      color: 'white'

    }}>

      <h1>Look at you! You have more certificates to add!</h1>

      <h6>Like the Overachiever you are!</h6>

      <h1>List Any/All Certificates You Have!</h1>

 

      <input

        type="text"

        value={organizationName2}

        onChange={(e) => {

          setOrganizationName2(e.target.value);

          updateLocalStorage('organizationName2', e.target.value);

        }}

        placeholder="Insert Organization Here"

        style={inputStyle}

      />

 

      <input

        type="text"

        value={titleName2}

        onChange={(e) => {

          setTitleName2(e.target.value);

          updateLocalStorage('titleName2', e.target.value);

        }}

        placeholder="Insert Title Here"

        style={inputStyle}

      />

      <p></p>

      <Link to="/screen15">

        <button style={buttonStyle('#db3c3cff')}>Another Certificate</button>

      </Link>

      <p></p>

      <Link to="/screen9">

        <button style={buttonStyle('#db3c3cff')}>Done</button>

      </Link>

    </div>

  );

}

const buttonStyle = (bgColor) => ({

  padding: '40px 40px',

  fontSize: '30px',

  backgroundColor: bgColor,

  color: 'white',

  border: 'none',

  borderRadius: '20px',

  cursor: 'pointer',

  margin: '20px'

});
 
export default function() {

  return (

    <Router>

      <Routes>

        {/* Route for the Home screen */}

        <Route path="/" element={<Home />} />

 

        {/* Route for Screen 1 */}

        <Route path="/screen1" element={<Screen1 />} />

 

        {/* Route for Screen 2 */}

        <Route path="/screen2" element={<Screen2 />} />

 

        <Route path= "/screen3" element={<Screen3/>} />

       

        <Route path= "/screen4" element={<Screen4/>} />

       

        <Route path= "/screen5" element={<Screen5/>} />

       

        <Route path= "/screen6" element={<Screen6/>} />

       

        <Route path= "/screen7" element={<Screen7/>} />

       

        <Route path= "/screen8" element={<Screen8/>} />

       

        <Route path= "/screen9" element={<Screen9/>} />

       

        <Route path= "/screen10" element={<Screen10/>} />

 

        <Route path= "/HighSchool" element ={<Screen11/>}/>

 

        <Route path= "/College" element ={<Screen12/>}/>

 

        <Route path= "/schoolpt2" element={<Screen13/>}/>

       

        <Route path = "/Screen14" element={<Screen14/>} />

 

        <Route path = "/screen15" element={<Screen15/>} />

 

      </Routes>

    </Router>

  );

}
