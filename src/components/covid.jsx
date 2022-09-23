import React, {useEffect, useState} from 'react'
import './covid.css';

const Covid = () => {

    const  [data, setData] = useState([]);
    const  [data1, setData1] = useState([]);
    const  [data2, setData2] = useState([]);
    const  [data3, setData3] = useState([]);
    const  [data4, setData4] = useState([]);
    const  [data5, setData5] = useState([]);
    const  [data6, setData6] = useState([]);
    const  [data7, setData7] = useState([]);
    const  [data8, setData8] = useState([]);
    const  [data9, setData9] = useState([]);
    const  [data10, setData10] = useState([]);
    const  [data11, setData11] = useState([]);
    const  [data12, setData12] = useState([]);
    const  [data13, setData13] = useState([]);
    const  [data14, setData14] = useState([]);
    const  [data15, setData15] = useState([]);
    const  [data16, setData16] = useState([]);
    const  [data17, setData17] = useState([]);
    const  [data18, setData18] = useState([]);
    const  [data19, setData19] = useState([]);
    const  [data20, setData20] = useState([]);
    const  [data21, setData21] = useState([]);
    const  [data22, setData22] = useState([]);
    const  [data23, setData23] = useState([]);
    const  [data24, setData24] = useState([]);
    const  [data25, setData25] = useState([]);
    const  [data26, setData26] = useState([]);
    const  [data27, setData27] = useState([]);
    const  [data28, setData28] = useState([]);
    const  [data29, setData29] = useState([]);
    const  [data30, setData30] = useState([]);
    const  [data31, setData31] = useState([]);
    const  [data32, setData32] = useState([]);
    const  [data33, setData33] = useState([]);
    const  [data34, setData34] = useState([]);
    const  [data35, setData35] = useState([]);
    const  [data36, setData36] = useState([]);
    const  [data37, setData37] = useState([]);
    
    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            setData(actualData.statewise[0]);
            setData1(actualData.statewise[1]);
            setData2(actualData.statewise[2]);
            setData3(actualData.statewise[3]);
            setData4(actualData.statewise[4]);
            setData5(actualData.statewise[5]);
            setData6(actualData.statewise[6]);
            setData7(actualData.statewise[7]);
            setData8(actualData.statewise[8]);
            setData9(actualData.statewise[9]);
            setData10(actualData.statewise[10]);
            setData11(actualData.statewise[11]);
            setData12(actualData.statewise[12]);
            setData13(actualData.statewise[13]);
            setData14(actualData.statewise[14]);
            setData15(actualData.statewise[15]);
            setData16(actualData.statewise[16]);
            setData17(actualData.statewise[17]);
            setData18(actualData.statewise[18]);
            setData19(actualData.statewise[19]);
            setData20(actualData.statewise[20]);
            setData21(actualData.statewise[21]);
            setData22(actualData.statewise[22]);
            setData23(actualData.statewise[23]);
            setData24(actualData.statewise[24]);
            setData25(actualData.statewise[25]);
            setData26(actualData.statewise[26]);
            setData27(actualData.statewise[27]);
            setData28(actualData.statewise[28]);
            setData29(actualData.statewise[29]);
            setData30(actualData.statewise[30]);
            setData31(actualData.statewise[31]);
            setData32(actualData.statewise[32]);
            setData33(actualData.statewise[33]);
            setData34(actualData.statewise[34]);
            setData35(actualData.statewise[35]);
            setData36(actualData.statewise[36]);
            setData37(actualData.statewise[37]);
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
       getCovidData() ;
    },[]);
    
    return(
    <div>
    <header>
        <div>
            INDIA COVID LIVE TRACKER
        </div>
    </header>
    <section>
        <div class="card card1">
            <div class="main-head">
                COUNTRY
            </div>
            <div class="main-data">
                INDIA
            </div>
        </div>
        <div class="card card2">
            <div class="main-head">
                CONFIRMED
            </div>
            <div class="main-data">
                {data.recovered}
            </div>
        </div>
        <div class="card card3">
            <div class="main-head">
                ACTIVE
            </div>
            <div class="main-data">
                {data.active}
            </div>
        </div>
        <div class="card card4">
            <div class="main-head">
                DEATH
            </div>
            <div class="main-data">
                {data.deaths}
            </div>
        </div>
        <div class="card card5">
            <div class="main-head">
                RECOVERED
            </div>
            <div class="main-data">
                {data.recovered}
            </div>
        </div>
    </section>

        <div class="fortable">
        <table class="content-table">
            <thead>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    <th>Last Updated</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data1.state}</td>
                    <td>{data1.confirmed}</td>
                    <td>{data1.active}</td>
                    <td>{data1.deaths}</td>
                    <td>{data1.recovered}</td>
                    <td>{data1.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data2.state}</td>
                    <td>{data2.confirmed}</td>
                    <td>{data2.active}</td>
                    <td>{data2.deaths}</td>
                    <td>{data2.recovered}</td>
                    <td>{data2.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data3.state}</td>
                    <td>{data3.confirmed}</td>
                    <td>{data3.active}</td>
                    <td>{data3.deaths}</td>
                    <td>{data3.recovered}</td>
                    <td>{data3.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data4.state}</td>
                    <td>{data4.confirmed}</td>
                    <td>{data4.active}</td>
                    <td>{data4.deaths}</td>
                    <td>{data4.recovered}</td>
                    <td>{data4.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data5.state}</td>
                    <td>{data5.confirmed}</td>
                    <td>{data5.active}</td>
                    <td>{data5.deaths}</td>
                    <td>{data5.recovered}</td>
                    <td>{data5.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data6.state}</td>
                    <td>{data6.confirmed}</td>
                    <td>{data6.active}</td>
                    <td>{data6.deaths}</td>
                    <td>{data6.recovered}</td>
                    <td>{data6.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data7.state}</td>
                    <td>{data7.confirmed}</td>
                    <td>{data7.active}</td>
                    <td>{data7.deaths}</td>
                    <td>{data7.recovered}</td>
                    <td>{data7.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data8.state}</td>
                    <td>{data8.confirmed}</td>
                    <td>{data8.active}</td>
                    <td>{data8.deaths}</td>
                    <td>{data8.recovered}</td>
                    <td>{data8.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data9.state}</td>
                    <td>{data9.confirmed}</td>
                    <td>{data9.active}</td>
                    <td>{data9.deaths}</td>
                    <td>{data9.recovered}</td>
                    <td>{data9.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data10.state}</td>
                    <td>{data10.confirmed}</td>
                    <td>{data10.active}</td>
                    <td>{data10.deaths}</td>
                    <td>{data10.recovered}</td>
                    <td>{data10.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data11.state}</td>
                    <td>{data11.confirmed}</td>
                    <td>{data11.active}</td>
                    <td>{data11.deaths}</td>
                    <td>{data11.recovered}</td>
                    <td>{data11.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data12.state}</td>
                    <td>{data12.confirmed}</td>
                    <td>{data12.active}</td>
                    <td>{data12.deaths}</td>
                    <td>{data12.recovered}</td>
                    <td>{data12.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data13.state}</td>
                    <td>{data13.confirmed}</td>
                    <td>{data13.active}</td>
                    <td>{data13.deaths}</td>
                    <td>{data13.recovered}</td>
                    <td>{data13.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data14.state}</td>
                    <td>{data14.confirmed}</td>
                    <td>{data14.active}</td>
                    <td>{data14.deaths}</td>
                    <td>{data14.recovered}</td>
                    <td>{data14.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data15.state}</td>
                    <td>{data15.confirmed}</td>
                    <td>{data15.active}</td>
                    <td>{data15.deaths}</td>
                    <td>{data15.recovered}</td>
                    <td>{data15.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data16.state}</td>
                    <td>{data16.confirmed}</td>
                    <td>{data16.active}</td>
                    <td>{data16.deaths}</td>
                    <td>{data16.recovered}</td>
                    <td>{data16.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data17.state}</td>
                    <td>{data17.confirmed}</td>
                    <td>{data17.active}</td>
                    <td>{data17.deaths}</td>
                    <td>{data17.recovered}</td>
                    <td>{data17.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data18.state}</td>
                    <td>{data18.confirmed}</td>
                    <td>{data18.active}</td>
                    <td>{data18.deaths}</td>
                    <td>{data18.recovered}</td>
                    <td>{data18.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data19.state}</td>
                    <td>{data19.confirmed}</td>
                    <td>{data19.active}</td>
                    <td>{data19.deaths}</td>
                    <td>{data19.recovered}</td>
                    <td>{data19.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data20.state}</td>
                    <td>{data20.confirmed}</td>
                    <td>{data20.active}</td>
                    <td>{data20.deaths}</td>
                    <td>{data20.recovered}</td>
                    <td>{data20.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data21.state}</td>
                    <td>{data21.confirmed}</td>
                    <td>{data21.active}</td>
                    <td>{data21.deaths}</td>
                    <td>{data21.recovered}</td>
                    <td>{data21.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data22.state}</td>
                    <td>{data22.confirmed}</td>
                    <td>{data22.active}</td>
                    <td>{data22.deaths}</td>
                    <td>{data22.recovered}</td>
                    <td>{data22.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data21.state}</td>
                    <td>{data21.confirmed}</td>
                    <td>{data21.active}</td>
                    <td>{data21.deaths}</td>
                    <td>{data21.recovered}</td>
                    <td>{data21.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data22.state}</td>
                    <td>{data22.confirmed}</td>
                    <td>{data22.active}</td>
                    <td>{data22.deaths}</td>
                    <td>{data22.recovered}</td>
                    <td>{data22.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data21.state}</td>
                    <td>{data21.confirmed}</td>
                    <td>{data21.active}</td>
                    <td>{data21.deaths}</td>
                    <td>{data21.recovered}</td>
                    <td>{data21.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data22.state}</td>
                    <td>{data22.confirmed}</td>
                    <td>{data22.active}</td>
                    <td>{data22.deaths}</td>
                    <td>{data22.recovered}</td>
                    <td>{data22.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data23.state}</td>
                    <td>{data23.confirmed}</td>
                    <td>{data23.active}</td>
                    <td>{data23.deaths}</td>
                    <td>{data23.recovered}</td>
                    <td>{data23.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data24.state}</td>
                    <td>{data24.confirmed}</td>
                    <td>{data24.active}</td>
                    <td>{data24.deaths}</td>
                    <td>{data24.recovered}</td>
                    <td>{data24.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data25.state}</td>
                    <td>{data25.confirmed}</td>
                    <td>{data25.active}</td>
                    <td>{data25.deaths}</td>
                    <td>{data25.recovered}</td>
                    <td>{data25.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data26.state}</td>
                    <td>{data26.confirmed}</td>
                    <td>{data26.active}</td>
                    <td>{data26.deaths}</td>
                    <td>{data26.recovered}</td>
                    <td>{data26.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data27.state}</td>
                    <td>{data27.confirmed}</td>
                    <td>{data27.active}</td>
                    <td>{data27.deaths}</td>
                    <td>{data27.recovered}</td>
                    <td>{data27.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data28.state}</td>
                    <td>{data28.confirmed}</td>
                    <td>{data28.active}</td>
                    <td>{data28.deaths}</td>
                    <td>{data28.recovered}</td>
                    <td>{data28.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data29.state}</td>
                    <td>{data29.confirmed}</td>
                    <td>{data29.active}</td>
                    <td>{data29.deaths}</td>
                    <td>{data29.recovered}</td>
                    <td>{data29.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data30.state}</td>
                    <td>{data30.confirmed}</td>
                    <td>{data30.active}</td>
                    <td>{data30.deaths}</td>
                    <td>{data30.recovered}</td>
                    <td>{data30.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data32.state}</td>
                    <td>{data32.confirmed}</td>
                    <td>{data32.active}</td>
                    <td>{data32.deaths}</td>
                    <td>{data32.recovered}</td>
                    <td>{data32.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data33.state}</td>
                    <td>{data33.confirmed}</td>
                    <td>{data33.active}</td>
                    <td>{data33.deaths}</td>
                    <td>{data33.recovered}</td>
                    <td>{data33.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data34.state}</td>
                    <td>{data34.confirmed}</td>
                    <td>{data34.active}</td>
                    <td>{data34.deaths}</td>
                    <td>{data34.recovered}</td>
                    <td>{data34.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data35.state}</td>
                    <td>{data35.confirmed}</td>
                    <td>{data35.active}</td>
                    <td>{data35.deaths}</td>
                    <td>{data35.recovered}</td>
                    <td>{data35.lastupdatedtime}</td>
                </tr>
                <tr>
                    <td>{data36.state}</td>
                    <td>{data36.confirmed}</td>
                    <td>{data36.active}</td>
                    <td>{data36.deaths}</td>
                    <td>{data36.recovered}</td>
                    <td>{data36.lastupdatedtime}</td>
                </tr>
                <tr class="active-row">
                    <td>{data37.state}</td>
                    <td>{data37.confirmed}</td>
                    <td>{data37.active}</td>
                    <td>{data37.deaths}</td>
                    <td>{data37.recovered}</td>
                    <td>{data37.lastupdatedtime}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
    <footer>
        <div>
        Made with <span> <i class="fa fa-heart"></i></span> by Deepak
            </div>
    </footer>
   </div>
    
)
}

export default Covid