import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import cryptoMy from '../lib/apiCrypto';
//LOGIC

const SignupInsure = () => {

    const getUserToken = () => {
        const option = {
            method: 'post',
            url: '/v1.0/cert/oauth2.0/clientCredential',
            headers: {
                'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
        axios(option)
        .then(function (response) {
            var companyToken = response.data.dataBody.access_token;
            console.log(response.data.dataBody.access_token);
            const dataBody = {
                "dataHeader":
                {
                }, 
                "dataBody":
                {
                    "language":null,
             "country":null,
             "clientIp":"127.0.0.1",
             "txId":"20200825153816934000000__3939_server1",
             "exTxId":null,
             "serviceName":"GDBD205BS.aPiiMastPlyNrmYnSrch",
             "errorCode":null,
             "requestPage":1,
             "rowsPerPage":15,
             "totalCount":0,
             "totalPage":0,
             "requestTimestamp":1598337496944,
             "returnMessage":null,
             "traceFlag":false,
             "z_user_nm":"테스터",
             "z_msg_cd":null,
             "z_msg_type":null,
             "z_err_cpn_id":null,
             "z_sys_msg_cn":null,
             "z_scrn_id":"",
             "z_work_mnu_id":"",
             "z_chn_cd":"GUI",
             "z_mac_adr":"",
             "z_afcp_dvcd":"",
             "z_orn_dvcd":"",
             "z_orn_no":"",
             "z_orn_nm":"",
             "z_stcn_no":"",
             "z_stcn_nm":"",
             "z_hdqt_no":"",
             "z_hdqt_nm":"",
             "z_bzlv_no":"",
             "z_bzlv_nm":"",
             "z_bh_no":"",
             "z_bh_nm":"",
             "z_brc_no":"",
             "z_brc_nm":"",
             "z_cnof_yn":"",
             "z_ormm_no":"",
             "z_ormm_nm":"",
             "z_ormm_dvcd":"",
             "z_ormm_tpcd":"",
             "z_ormm_ptl_tpcd":"",
             "z_magc_no":"",
             "z_rp_agnc_no":"",
             "z_auth_grp_cd":"",
             "z_comm_auth_grp_cd":"",
             "z_pos_cd":"",
             "z_pos_nm":"",
             "z_dty_cd":"",
             "z_dty_nm":"",
             "z_clpo_cd":"",
             "z_clpo_nm":"",
             "z_bdut_cd":"",
             "z_bdut_nm":"",
             "z_email":"",
             "z_ctf_key":"",
             "z_in_outs_dvn":"",
             "z_srch_ref_orr":null,
             "z_row_type":1,
             "z_page_if":{},
             "z_scrn_rltn_sys_cd":"",
             "appt_key":"11111",
             "mast_plno":"120210341120",
             "nrm_yn":"",
             "z_user_id":"10786830",
             "superIFVO":null,
             "superPRTVO":null
                }
            }
            const option = {
                method: 'post',
                url: '/v1.0/GNI/comm/mastplysrch',
                data : JSON.stringify(dataBody),
                headers: {
                    'Authorization' : 'Bearer ' + companyToken,
                    'timestamp' : '20210218190839',
                    'ci' : 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
                    'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                    'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                    'Content-Type': 'application/json; charset=utf-8',
                    'hsKey' : cryptoMy.hsKey(JSON.stringify(dataBody))
                }
            }
            axios(option)
            .then(function (response) {
                axios.post('/v1.0/cert/oauth2.0/resourceOwner', {}, {
                    headers: {
                        'Connection': 'keep-alive',
                        'Content-Type': 'application/json; charset=utf-8',
                        'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                        'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                        'Authorization': 'Bearer ' + companyToken, 
                        'ci': 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
                    }
                }).then((res) => {
                    console.log(res.data.dataBody.access_token);
                    var userToken = res.data.dataBody.access_token;
                    var requestData = {
                        "dataBody": {
                            "z_chn_cd": "API",
                            "pan_typ_srch_scy_ctc": {
                                "job_cd": "12021",
                                "ntin_heal_arc_eny_yn": "1",
                                "tdtn_cd": "US",
                                "ins_qtnd": [
                                    {
                                        "qtn_rep_yn_19": "0",
                                        "qtn_rep_yn_16": "0",
                                        "qtn_rep_yn_15": "0",
                                        "ins_rsdn_no": "Tc08fJZB7Ccs30r+GcpD4N4VkzSe6raL2pJrZdcJ3FuqUCXQPnMe3KtWllFkqoVWr4E2fw==",
                                        "qtn_rep_yn_18": "0",
                                        "qtn_rep_yn_17": "0",
                                        "qtn_rep_yn_14": "0",
                                        "qtn_rep_yn_4": "0",
                                        "qtn_rep_yn_20": "0"
                                    }
                                ],
                                "sl_pan_cd": "A01",
                                "scy_ctc_ins": [
                                    {
                                        "ins_nm": "유관우",
                                        "ins_mbph_3": "8250",
                                        "ins_rsdn_no": "Tc08fJZB7Ccs30r+GcpD4N4VkzSe6raL2pJrZdcJ3FuqUCXQPnMe3KtWllFkqoVWr4E2fw==",
                                        "ins_mbph_2": "9207",
                                        "ins_eml": "send@mail.com",
                                        "ins_mbph_1": "010",
                                        "add_dt": "20210501",
                                        "sx_cd":"2",
                                        "trmt_dt": "20210505"
                                    }
                                ],
                                "eny_psct": "1"
                            },
                            "mast_plno": "120210341120",
                            "z_ctf_yn": "",
                            "scy_ctc_cvr_detl": [
                                {
                                    "crty_arc_inam_1": "10000000",
                                    "crcy_cd": "WON",
                                    "sl_cvr_cd": "101555",
                                    "crty_dct_amt_1": "0",
                                    "sl_pan_cd": "A01"
                                },
                                {
                                    "crty_arc_inam_1": "200000000",
                                    "crcy_cd": "WON",
                                    "sl_cvr_cd": "101545",
                                    "crty_dct_amt_1": "0",
                                    "sl_pan_cd": "A01"
                                }
                            ],
                            "appt_key": "",
                            "enpl_ctc_bsc_if": {
                                "arc_trm_str_dt": "20210420",
                                "plhd_brtn": "1358207931",
                                "arc_trm_fin_time": "2400",
                                "arc_trm_str_time": "0000",
                                "arc_trm_fin_dt": "20210425",
                                "rcrt_empno": "10786830"
                            },
                            "pdc_cd": "13512"
                        },
                        "dataHeader": {
                            "z_user_id": "10786830"
                        },
                        "testBody": {}
                    }
                    const option = {
                        method: 'post',
                        url: '/v1.0/GNI/trip_overseas/inj/wound/design',
                        data : JSON.stringify(requestData),
                        headers: {
                            'Authorization' : 'Bearer ' + userToken,
                            'timestamp' : '20210218190839',
                            'ci' : 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
                            'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                            'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                            'Content-Type': 'application/json; charset=utf-8',
                            'hsKey' : cryptoMy.hsKey(JSON.stringify(requestData))
                        }
                    }
                    axios(option)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });        

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    const inputChange = (e) =>{
       const {name, value} = e.target;

    }
    const btnClick = () => {

    }



    return (
        <>
            <Header title={'보험 가입 데이터 입력'}></Header>
            <button onClick={getUserToken}>api 콜</button>
        </>

    );
}

export default SignupInsure;
