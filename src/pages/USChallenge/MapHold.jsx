import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import USAMap from "../../components/Map/Map";
import StateCounter from "../../components/Tracker/StateCounterCard";
import axios from "axios";
import "./Map.scss";
import ProgressBar from "../../components/Tracker/ProgressBar";
import ChallengeBanner from "../../components/Banners/ChallengeBanner";
import mapusa from "../../assets/images/map-usa.jpg";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import { jwtDecode } from "jwt-decode";
import statesData from "../../data/states.json";

const URL = import.meta.env.VITE_APP_BASE_URL;

const MapPage = () => {
  //vvvvvvvvvvvvvvvv using jwt payload data for ID to pull challenge data from database based on ID vvvvvvvvvvvvvvvv//
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("JWTtoken");
  const decoded = jwtDecode(token);



  /*  useEffect(() => {
    if (!token) {
      return;
    } 
    
    try{
      const decodedToken = jwtDecode(token);
      setDecoded(decodedToken)
    } catch (error) {
      console.error("Error decoding token:", error);
    }
      setIsLoading(false);
    }
, [token]); */

  //^^^^^^^^^^^^ using jwt payload data for ID to pull challenge data from database based on ID ^^^^^^^^^^^^^^^^^^//

  //vvvvvvvvvvvvvvvv fetching the challenge data from the database based on ID vvvvvvvvvvvvvvvv//

  const [visitedDetails, setVisitedDetails] = useState([]);

  const fetchVisitedData = async () => {
    try {
      const response = await axios.get(
        `${URL}/us-states-challenge/${decoded.id}`
      );
      setVisitedDetails(response.data);
    } catch (error) {
      console.error("Unable to get visited data:", error);
    }
  };

  useEffect(() => {
    fetchVisitedData();
  }, []);

  useEffect(() => {
    if (visitedDetails.length > 0) {
    }
  }, [visitedDetails]);


  //^^^^^^^^^^^^ fetching the challenge data from the database based on ID ^^^^^^^^^^^^^^^^^^//


  /* const [stateCodeData, setStateCodeData] = useState([]); */
  const [totalCount, setTotalCount] = useState(0);
  const [progressState, setProgressState] = useState(0);
  const [visited, setVisited] = useState(false);

  const handleButtonClick = () => {
    setProgressState(progressState + 0.09803922);
    setTotalCount(totalCount + 1);
    setVisited(true);
  };

  //vvvvvvvvvvvvvvvv put/edit challenge data from UI the database based on ID vvvvvvvvvvvvvvvv//

  const [al, setAl] = useState(false);
  const [ak, setAk] = useState(false);
  const [az, setAz] = useState(false);
  const [ar, setAr] = useState(false);
  const [ca, setCa] = useState(false);
  const [co, setCo] = useState(false);
  const [ct, setCt] = useState(false);
  const [de, setDe] = useState(false);
  const [dc, setDc] = useState(false);
  const [fl, setFl] = useState(false);
  const [ga, setGa] = useState(false);
  const [hi, setHi] = useState(false);
  const [id, setId] = useState(false);
  const [il, setIl] = useState(false);
  const [ind, setInd] = useState(false);
  const [ia, setIa] = useState(false);
  const [ks, setKs] = useState(false);
  const [ky, setKy] = useState(false);
  const [la, setLa] = useState(false);
  const [me, setMe] = useState(false);
  const [md, setMd] = useState(false);
  const [ma, setMa] = useState(false);
  const [mi, setMi] = useState(false);
  const [mn, setMn] = useState(false);
  const [ms, setMs] = useState(false);
  const [mo, setMo] = useState(false);
  const [mt, setMt] = useState(false);
  const [ne, setNe] = useState(false);
  const [nv, setNv] = useState(false);
  const [nh, setNh] = useState(false);
  const [nj, setNj] = useState(false);
  const [nm, setNm] = useState(false);
  const [ny, setNy] = useState(false);
  const [nc, setNc] = useState(false);
  const [nd, setNd] = useState(false);
  const [oh, setOh] = useState(false);
  const [ok, setOk] = useState(false);
  const [or, setOr] = useState(false);
  const [pa, setPa] = useState(false);
  const [ri, setRi] = useState(false);
  const [sc, setSc] = useState(false);
  const [sd, setSd] = useState(false);
  const [tn, setTn] = useState(false);
  const [tx, setTx] = useState(false);
  const [ut, setUt] = useState(false);
  const [vt, setVt] = useState(false);
  const [va, setVa] = useState(false);
  const [wa, setWa] = useState(false);
  const [wv, setWv] = useState(false);
  const [wi, setWi] = useState(false);
  const [wy, setWy] = useState(false);

  const onSubmitAl = async (event) => {
    setAl(true);
  };
  const onSubmitAk = async (event) => {
    setAk(true);
  };
  const onSubmitAz = async (event) => {
    setAz(true);
  };
  const onSubmitCa = async (event) => {
    setCa(true);
  };
  const onSubmitCo = async (event) => {
    setCo(true);
  };
  const onSubmitCt = async (event) => {
    setCt(true);
  };
  const onSubmitDe = async (event) => {
    setDe(true);
  };
  const onSubmitAr = async (event) => {
    setAr(true);
  };
  const onSubmitDc = async (event) => {
    setDc(true);
  };
  const onSubmitFl = async (event) => {
    setFl(true);
  };
  const onSubmitGa = async (event) => {
    setGa(true);
  };
  const onSubmitHi = async (event) => {
    setHi(true);
  };
  const onSubmitId = async (event) => {
    setId(true);
  };
  const onSubmitIl = async (event) => {
    setIl(true);
  };
  const onSubmitInd = async (event) => {
    setInd(true);
  };
  const onSubmitIa = async (event) => {
    setIa(true);
  };
  const onSubmitKs = async (event) => {
    setKs(true);
  };
  const onSubmitKy = async (event) => {
    setKy(true);
  };
  const onSubmitLa = async (event) => {
    setLa(true);
  };
  const onSubmitMe = async (event) => {
    setMe(true);
  };
  const onSubmitMd = async (event) => {
    setMd(true);
  };
  const onSubmitMa = async (event) => {
    setMa(true);
  };
  const onSubmitMi = async (event) => {
    setMi(true);
  };
  const onSubmitMs = async (event) => {
    setMs(true);
  };
  const onSubmitMn = async (event) => {
    setMn(true);
  };
  const onSubmitMo = async (event) => {
    setMo(true);
  };
  const onSubmitMt = async (event) => {
    setMt(true);
  };
  const onSubmitNe = async (event) => {
    setNe(true);
  };
  const onSubmitNv = async (event) => {
    setNv(true);
  };
  const onSubmitNh = async (event) => {
    setNh(true);
  };
  const onSubmitNj = async (event) => {
    setNj(true);
  };
  const onSubmitNm = async (event) => {
    setNm(true);
  };
  const onSubmitNy = async (event) => {
    setNy(true);
  };
  const onSubmitNc = async (event) => {
    setNc(true);
  };
  const onSubmitNd = async (event) => {
    setNd(true);
  };
  const onSubmitOh = async (event) => {
    setOh(true);
  };
  const onSubmitOk = async (event) => {
    setOk(true);
  };
  const onSubmitOr = async (event) => {
    setOr(true);
  };
  const onSubmitPa = async (event) => {
    setPa(true);
  };
  const onSubmitRi = async (event) => {
    setRi(true);
  };
  const onSubmitSc = async (event) => {
    setSc(true);
  };
  const onSubmitSd = async (event) => {
    setSd(true);
  };
  const onSubmitTn = async (event) => {
    setTn(true);
  };
  const onSubmitTx = async (event) => {
    setTx(true);
  };
  const onSubmitUt = async (event) => {
    setUt(true);
  };
  const onSubmitVt = async (event) => {
    setVt(true);
  };
  const onSubmitVa = async (event) => {
    setVa(true);
  };
  const onSubmitWa = async (event) => {
    setWa(true);
  };
  const onSubmitWv = async (event) => {
    setWv(true);
  };
  const onSubmitWi = async (event) => {
    setWi(true);
  };
  const onSubmitWy = async (event) => {
    setWy(true);
  };

  const constUpdateTable = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        al: al,
        ak: ak,
        az: az,
        ar: ar,
        ca: ca,
        co: co,
        ct: ct,
        de: de,
        dc: dc,
        fl: fl,
        ga: ga,
        hi: hi,
        id: id,
        il: il,
        in: ind,
        ia: ia,
        ks: ks,
        ky: ky,
        la: la,
        me: me,
        md: md,
        ma: ma,
        mi: mi,
        mn: mn,
        ms: ms,
        mo: mo,
        mt: mt,
        ne: ne,
        nv: nv,
        nh: nh,
        nj: nj,
        nm: nm,
        ny: ny,
        nc: nc,
        nd: nd,
        oh: oh,
        ok: ok,
        or: or,
        pa: pa,
        ri: ri,
        sc: sc,
        sd: sd,
        tn: tn,
        tx: tx,
        ut: ut,
        vt: vt,
        va: va,
        wa: wa,
        wv: wv,
        wi: wi,
        wy: wy,
      });
      alert("Another state checked off the list");
     /*  navigate("/us-states-challenge");
      window.location.reload(); */
    } catch (error) {
      console.error("Error updating state value:", error);
    }
  };

  useEffect(() => {
    if (
      al ||
      ak ||
      az ||
      ar ||
      ca ||
      co ||
      ct ||
      de ||
      dc ||
      fl ||
      ga ||
      ind ||
      ia ||
      ks ||
      ky ||
      la ||
      me ||
      md ||
      ma ||
      mi ||
      mn ||
      ms ||
      mo ||
      mt ||
      ne ||
      nv ||
      nh ||
      nj ||
      nm ||
      ny ||
      nc ||
      nd ||
      oh ||
      ok ||
      or ||
      pa ||
      ri ||
      sc ||
      sd ||
      tn ||
      tx ||
      ut ||
      vt ||
      va ||
      wa ||
      wv ||
      wi ||
      wy
    ) {
      constUpdateTable();
    }
  }, [
    al,
    ak,
    az,
    ar,
    ca,
    co,
    ct,
    de,
    dc,
    fl,
    ga,
    ind,
    ia,
    ks,
    ky,
    la,
    me,
    md,
    ma,
    mi,
    mn,
    ms,
    mo,
    mt,
    ne,
    nv,
    nh,
    nj,
    nm,
    ny,
    nc,
    nd,
    oh,
    ok,
    or,
    pa,
    ri,
    sc,
    sd,
    tn,
    tx,
    ut,
    vt,
    va,
    wa,
    wv,
    wi,
    wy,
  ]);

  return (
    <>

AL: {visitedDetails[0]?.al}
AR: {visitedDetails[0]?.ar}



      <AuthenticatedHeader />
      <ChallengeBanner
        image={mapusa}
        text="outline of the United States in red, white and blue: created by Allexxander"
        header="Conquer the 51-State Challenge: Explore Every Corner of the USA!"
        description="Embark on the ultimate lifetime challenge: visit all 51 states in the United States. But here's the catch: mere pass-throughs won't suffice. Dive deep into each state's culture, landscapes, and history. From bustling cities to serene countryside, explore every corner of your country. Our user-friendly interface lets you easily check off each state as you visit, while a progress bar tracks your journey towards the ultimate goal. Pack your bags, plot your route, and get ready for the adventure of a lifetime, one state at a time."
      />
      <ProgressBar width={500} percent={progressState} />
      <p>{totalCount} / 51</p>
      <section className="state__cards">
        <StateCounter
          state={statesData[0].state}
          state_code={statesData[0].state_code}
          description={statesData[0].state_description}
          visited={visitedDetails[0]?.al === 0 ? "0" : "1"}
          onButtonClick={onSubmitAl}
          image={statesData[0].image}
        />
        <StateCounter
          state={statesData[1].state}
          state_code={statesData[1].state_code}
          description={statesData[1].state_description}
          visited={visitedDetails[0]?.ak === 0 ? "0" : "1"}
          onButtonClick={onSubmitAk}
          image={statesData[1].image}
        />
        <StateCounter
          state={statesData[2].state}
          state_code={statesData[2].state_code}
          description={statesData[2].state_description}
          visited={visitedDetails[0]?.az === 0 ? "0" : "1"}
          onButtonClick={onSubmitAz}
          image={statesData[2].image}
        />
        <StateCounter
          state={statesData[3].state}
          state_code={statesData[3].state_code}
          description={statesData[3].state_description}
          visited={visitedDetails[0]?.ar === 0 ? "0" : "1"}
          onButtonClick={onSubmitAr}
          image={statesData[3].image}
        />
        <StateCounter
          state={statesData[4].state}
          state_code={statesData[4].state_code}
          description={statesData[4].state_description}
          visited={visitedDetails[0]?.ca === 0 ? "0" : "1"}
          onButtonClick={onSubmitCa}
          image={statesData[4].image}
        />
        <StateCounter
          state={statesData[5].state}
          state_code={statesData[5].state_code}
          description={statesData[5].state_description}
          visited={visitedDetails[0]?.co === 0 ? "0" : "1"}
          onButtonClick={onSubmitCo}
          image={statesData[5].image}
        />
        <StateCounter
          state={statesData[6].state}
          state_code={statesData[6].state_code}
          description={statesData[6].state_description}
          visited={visitedDetails[0]?.ct === 0 ? "0" : "1"}
          onButtonClick={onSubmitCt}
          image={statesData[6].image}
        />
        <StateCounter
          state={statesData[7].state}
          state_code={statesData[7].state_code}
          description={statesData[7].state_description}
          visited={visitedDetails[0]?.de === 0 ? "0" : "1"}
          onButtonClick={onSubmitDe}
          image={statesData[7].image}
        />
        <StateCounter
          state={statesData[8].state}
          state_code={statesData[8].state_code}
          description={statesData[8].state_description}
          visited={visitedDetails[0]?.dc === 0 ? "0" : "1"}
          onButtonClick={onSubmitDc}
          image={statesData[8].image}
        />
        <StateCounter
          state={statesData[9].state}
          state_code={statesData[9].state_code}
          description={statesData[9].state_description}
          visited={visitedDetails[0]?.fl === 0 ? "0" : "1"}
          onButtonClick={onSubmitFl}
          image={statesData[9].image}
        />
        <StateCounter
          state={statesData[10].state}
          state_code={statesData[10].state_code}
          description={statesData[10].state_description}
          visited={visitedDetails[0]?.ga === 0 ? "0" : "1"}
          onButtonClick={onSubmitGa}
          image={statesData[10].image}
        />
        <StateCounter
          state={statesData[11].state}
          state_code={statesData[11].state_code}
          description={statesData[11].state_description}
          visited={visitedDetails[0]?.hi === 0 ? "0" : "1"}
          onButtonClick={onSubmitHi}
          image={statesData[11].image}
        />
        <StateCounter
          state={statesData[12].state}
          state_code={statesData[12].state_code}
          description={statesData[12].state_description}
          visited={visitedDetails[0]?.id === 0 ? "0" : "1"}
          onButtonClick={onSubmitId}
          image={statesData[12].image}
        />
        <StateCounter
          state={statesData[13].state}
          state_code={statesData[13].state_code}
          description={statesData[13].state_description}
          visited={visitedDetails[0]?.il === 0 ? "0" : "1"}
          onButtonClick={onSubmitIl}
          image={statesData[13].image}
        />
        <StateCounter
          state={statesData[14].state}
          state_code={statesData[14].state_code}
          description={statesData[14].state_description}
          visited={visitedDetails[0]?.in === 0 ? "0" : "1"}
          onButtonClick={onSubmitInd}
          image={statesData[14].image}
        />
        <StateCounter
          state={statesData[15].state}
          state_code={statesData[15].state_code}
          description={statesData[15].state_description}
          visited={visitedDetails[0]?.ia === 0 ? "0" : "1"}
          onButtonClick={onSubmitIa}
          image={statesData[15].image}
        />
        <StateCounter
          state={statesData[16].state}
          state_code={statesData[16].state_code}
          description={statesData[16].state_description}
          visited={visitedDetails[0]?.ks === 0 ? "0" : "1"}
          onButtonClick={onSubmitKs}
          image={statesData[16].image}
        />
        <StateCounter
          state={statesData[17].state}
          state_code={statesData[17].state_code}
          description={statesData[17].state_description}
          visited={visitedDetails[0]?.ky === 0 ? "0" : "1"}
          onButtonClick={onSubmitKy}
          image={statesData[17].image}
        />
        <StateCounter
          state={statesData[18].state}
          state_code={statesData[18].state_code}
          description={statesData[18].state_description}
          visited={visitedDetails[0]?.la === 0 ? "0" : "1"}
          onButtonClick={onSubmitLa}
          image={statesData[18].image}
        />
        <StateCounter
          state={statesData[19].state}
          state_code={statesData[19].state_code}
          description={statesData[19].state_description}
          visited={visitedDetails[0]?.me === 0 ? "0" : "1"}
          onButtonClick={onSubmitMe}
          image={statesData[19].image}
        />
        <StateCounter
          state={statesData[20].state}
          state_code={statesData[20].state_code}
          description={statesData[20].state_description}
          visited={visitedDetails[0]?.md === 0 ? "0" : "1"}
          onButtonClick={onSubmitMd}
          image={statesData[20].image}
        />
        <StateCounter
          state={statesData[21].state}
          state_code={statesData[21].state_code}
          description={statesData[21].state_description}
          visited={visitedDetails[0]?.ma === 0 ? "0" : "1"}
          onButtonClick={onSubmitMa}
          image={statesData[21].image}
        />
        <StateCounter
          state={statesData[22].state}
          state_code={statesData[22].state_code}
          description={statesData[22].state_description}
          visited={visitedDetails[0]?.mi === 0 ? "0" : "1"}
          onButtonClick={onSubmitMi}
          image={statesData[22].image}
        />
        <StateCounter
          state={statesData[23].state}
          state_code={statesData[23].state_code}
          description={statesData[23].state_description}
          visited={visitedDetails[0]?.mn === 0 ? "0" : "1"}
          onButtonClick={onSubmitMn}
          image={statesData[23].image}
        />
        <StateCounter
          state={statesData[24].state}
          state_code={statesData[24].state_code}
          description={statesData[24].state_description}
          visited={visitedDetails[0]?.ms === 0 ? "0" : "1"}
          onButtonClick={onSubmitMs}
          image={statesData[24].image}
        />
        <StateCounter
          state={statesData[25].state}
          state_code={statesData[25].state_code}
          description={statesData[25].state_description}
          visited={visitedDetails[0]?.mo === 0 ? "0" : "1"}
          onButtonClick={onSubmitMo}
          image={statesData[25].image}
        />
        <StateCounter
          state={statesData[26].state}
          state_code={statesData[26].state_code}
          description={statesData[26].state_description}
          visited={visitedDetails[0]?.mt === 0 ? "0" : "1"}
          onButtonClick={onSubmitMt}
          image={statesData[26].image}
        />
        <StateCounter
          state={statesData[27].state}
          state_code={statesData[27].state_code}
          description={statesData[27].state_description}
          visited={visitedDetails[0]?.ne === 0 ? "0" : "1"}
          onButtonClick={onSubmitNe}
          image={statesData[27].image}
        />
        <StateCounter
          state={statesData[28].state}
          state_code={statesData[28].state_code}
          description={statesData[28].state_description}
          visited={visitedDetails[0]?.nv === 0 ? "0" : "1"}
          onButtonClick={onSubmitNv}
          image={statesData[28].image}
        />
        <StateCounter
          state={statesData[29].state}
          state_code={statesData[29].state_code}
          description={statesData[29].state_description}
          visited={visitedDetails[0]?.nh === 0 ? "0" : "1"}
          onButtonClick={onSubmitNh}
          image={statesData[29].image}
        />
        <StateCounter
          state={statesData[30].state}
          state_code={statesData[30].state_code}
          description={statesData[30].state_description}
          visited={visitedDetails[0]?.nj === 0 ? "0" : "1"}
          onButtonClick={onSubmitNj}
          image={statesData[30].image}
        />
        <StateCounter
          state={statesData[31].state}
          state_code={statesData[31].state_code}
          description={statesData[31].state_description}
          visited={visitedDetails[0]?.nm === 0 ? "0" : "1"}
          onButtonClick={onSubmitNm}
          image={statesData[31].image}
        />
        <StateCounter
          state={statesData[32].state}
          state_code={statesData[32].state_code}
          description={statesData[32].state_description}
          visited={visitedDetails[0]?.ny === 0 ? "0" : "1"}
          onButtonClick={onSubmitNy}
          image={statesData[32].image}
        />
        <StateCounter
          state={statesData[33].state}
          state_code={statesData[33].state_code}
          description={statesData[33].state_description}
          visited={visitedDetails[0]?.nc === 0 ? "0" : "1"}
          onButtonClick={onSubmitNc}
          image={statesData[33].image}
        />
        <StateCounter
          state={statesData[34].state}
          state_code={statesData[34].state_code}
          description={statesData[34].state_description}
          visited={visitedDetails[0]?.nd === 0 ? "0" : "1"}
          onButtonClick={onSubmitNd}
          image={statesData[34].image}
        />
        <StateCounter
          state={statesData[35].state}
          state_code={statesData[35].state_code}
          description={statesData[35].state_description}
          visited={visitedDetails[0]?.oh === 0 ? "0" : "1"}
          onButtonClick={onSubmitOh}
          image={statesData[35].image}
        />
        <StateCounter
          state={statesData[36].state}
          state_code={statesData[36].state_code}
          description={statesData[36].state_description}
          visited={visitedDetails[0]?.ok === 0 ? "0" : "1"}
          onButtonClick={onSubmitOk}
          image={statesData[36].image}
        />
        <StateCounter
          state={statesData[37].state}
          state_code={statesData[37].state_code}
          description={statesData[37].state_description}
          visited={visitedDetails[0]?.or === 0 ? "0" : "1"}
          onButtonClick={onSubmitOr}
          image={statesData[37].image}
        />
        <StateCounter
          state={statesData[38].state}
          state_code={statesData[38].state_code}
          description={statesData[38].state_description}
          visited={visitedDetails[0]?.pa === 0 ? "0" : "1"}
          onButtonClick={onSubmitPa}
          image={statesData[38].image}
        />
        <StateCounter
          state={statesData[39].state}
          state_code={statesData[39].state_code}
          description={statesData[39].state_description}
          visited={visitedDetails[0]?.ri === 0 ? "0" : "1"}
          onButtonClick={onSubmitRi}
          image={statesData[39].image}
        />
        <StateCounter
          state={statesData[40].state}
          state_code={statesData[40].state_code}
          description={statesData[40].state_description}
          visited={visitedDetails[0]?.sc === 0 ? "0" : "1"}
          onButtonClick={onSubmitSc}
          image={statesData[40].image}
        />
        <StateCounter
          state={statesData[41].state}
          state_code={statesData[41].state_code}
          description={statesData[41].state_description}
          visited={visitedDetails[0]?.sd === 0 ? "0" : "1"}
          onButtonClick={onSubmitSd}
          image={statesData[41].image}
        />
        <StateCounter
          state={statesData[42].state}
          state_code={statesData[42].state_code}
          description={statesData[42].state_description}
          visited={visitedDetails[0]?.tn === 0 ? "0" : "1"}
          onButtonClick={onSubmitTn}  image={statesData[42].image}
        />
        <StateCounter
          state={statesData[43].state}
          state_code={statesData[43].state_code}
          description={statesData[43].state_description}
          visited={visitedDetails[0]?.tx === 0 ? "0" : "1"}
          onButtonClick={onSubmitTx}  image={statesData[43].image}
        />
        <StateCounter
          state={statesData[44].state}
          state_code={statesData[44].state_code}
          description={statesData[44].state_description}
          visited={visitedDetails[0]?.ut === 0 ? "0" : "1"}
          onButtonClick={onSubmitUt}  image={statesData[44].image}
        />
        <StateCounter
          state={statesData[45].state}
          state_code={statesData[45].state_code}
          description={statesData[45].state_description}
          visited={visitedDetails[0]?.vt === 0 ? "0" : "1"}
          onButtonClick={onSubmitVt}  image={statesData[45].image}
        />
        <StateCounter
          state={statesData[46].state}
          state_code={statesData[46].state_code}
          description={statesData[46].state_description}
          visited={visitedDetails[0]?.va === 0 ? "0" : "1"}
          onButtonClick={onSubmitVa}  image={statesData[46].image}
        />
        <StateCounter
          state={statesData[47].state}
          state_code={statesData[47].state_code}
          description={statesData[47].state_description}
          visited={visitedDetails[0]?.wa === 0 ? "0" : "1"}
          onButtonClick={onSubmitWa}  image={statesData[47].image}
        />
        <StateCounter
          state={statesData[48].state}
          state_code={statesData[48].state_code}
          description={statesData[48].state_description}
          visited={visitedDetails[0]?.wv === 0 ? "0" : "1"}
          onButtonClick={onSubmitWv}  image={statesData[48].image}
        />
        <StateCounter
          state={statesData[49].state}
          state_code={statesData[49].state_code}
          description={statesData[49].state_description}
          visited={visitedDetails[0]?.wi === 0 ? "0" : "1"}
          onButtonClick={onSubmitWi}  image={statesData[49].image}
        />
        <StateCounter
          state={statesData[50].state}
          state_code={statesData[50].state_code}
          description={statesData[50].state_description}
          visited={visitedDetails[0]?.wy === 0 ? "0" : "1"}
          onButtonClick={onSubmitWy}  image={statesData[50].image}
        />
      </section>
    </>
  );
};

export default MapPage;
