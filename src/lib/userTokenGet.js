const { default: axios } = require("axios");


module.exports = {
    getUserToken : () =>{
        getAccessToken()
    }
}

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

const getAccessToken = () => {
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
        let companyAccessToken = response.data.dataBody.access_token;
        const option = {
            method: 'post',
            url: '/v1.0/GNI/comm/mastplysrch',
            data : JSON.stringify(dataBody),
            headers: {
                'Authorization' : 'Bearer ' + companyAccessToken,
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
                    'Authorization': 'Bearer ' + companyAccessToken, 
                    'ci': 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
                }
            }).then((res) => {
                console.log(res.data)
                return res.data;
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

const getMaster = (companyAccessToken) =>{
    const option = {
        method: 'post',
        url: '/v1.0/GNI/comm/mastplysrch',
        headers: {
            'Authorization' : 'Bearer ' + companyAccessToken,
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
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}

const getUserAccessToken = (companyAccessToken) => {
    axios.post('/v1.0/cert/oauth2.0/resourceOwner', {}, {
        headers: {
            'Connection': 'keep-alive',
            'Content-Type': 'application/json; charset=utf-8',
            'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
            'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
            'Authorization': 'Bearer ' + companyAccessToken, 
            'ci': 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
        }
    }).then((res) => {
        return response.data;
    })
}