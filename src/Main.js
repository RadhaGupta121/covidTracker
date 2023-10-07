import { useEffect, useState } from 'react';
const Main = () => {

    const [state, setstate] = useState('')
    const [data, setdata] = useState('');
    const [confirmed, setconfirmed] = useState('');
    const [tested, settested] = useState('');
    const [vac1, setvac1] = useState('');
    const [vac2, setvac2] = useState('');
    const [flag, setflag] = useState(false);
const[show,setshow]=useState(false);
    const fetchdata = async () => {
        setdata(await fetch("https://data.covid19india.org/v4/min/data.min.json").then(response => response.json()));
    }

 const state_name={
    'Andhra Pradesh':'AP',
    'Arunachal Pradesh':'AR',
    'Bihar':'BR',
    'Uttar Pradesh':'UP',
    'Orissa':'OR',
    'Punjab':'PB',
    'Rajasthan':'RJ',
    'Delhi':'DL'
 }
    const Search = async () => {
        await fetchdata();
        setflag(true);
        try {
            console.log(data);
            console.log(data[state].total);
            setconfirmed(data[state].total.confirmed);
            settested(data[state].total.tested);
            setvac1(data[state].total.vaccinated1);
            setvac2(data[state].total.vaccinated2);
        }
        catch (error) {
            console.log("this is error", error);
            setshow(true);
            setflag(false);
        }
    }


    return (
        <>

            <div>

                <div>

                    <div id='searchbar'>

                        <center>
                            <input type='text' placeholder='Enter State name' onChange={(e) => {
                                  const val = e.target.value;
                                   console.log(state_name[val]);
                              
                                setstate(state_name[val]);
                                if (val.length < 2) {
                                   setflag(false);
                                }
                             
                               
                            }


                            } /><button onClick={Search}>Search</button>

                        </center>      </div>
                    <center><h1>Covid tracker</h1></center>
                    
                    { 
                        flag && <>
                            <table border="1">
                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Tested</th>
                                    <th>Vaccinated1</th>
                                    <th>Vaccinated2</th>
                                </tr>
                                <tr>
                                    <td>{state}</td>
                                    <td>{confirmed}</td>
                                    <td>{tested}</td>
                                    <td>{vac1}</td>
                                    <td>{vac2}</td>
                                </tr>

                            </table>
                        </>
                    }


                </div></div>
        </>
    )
}
export default Main;