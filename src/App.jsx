import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [webStatus, setStatus]= useState("bugPage")

  function togglePage(){
    if(webStatus==="bugPage"){
      setStatus("homeMenu")
    }else{
      setStatus("bugPage")
    }
  }

  return (<>
  <Button variant='primary' onClick={()=> togglePage()}> Bogos Binted? </Button>
  {webStatus==="homeMenu" ? 
    (<div>
      <div 
      style={{backgroundColor:'#402C1B', color: '#00AA03'}}>
      <Image
        src="src/Assets/ameliababby.png"
        width="30%"/>
      <h1>"and the universe said I love you<br></br><br></br>
        because you are love"<br></br><br></br>
        - Minecraft End Poem</h1>
    </div>
     <h1>WELCOME TO ASTOTHELES BUG FABLES</h1>
     <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
        src="src/Assets/bstotheles.png"
        width="30%"></Image> </Col>
          <Col xs={12} md={6} lg={6} xl={6}><h2>
            Species: Cricket <br></br>
            Location: Bandit Hideout<br></br>
            HP: 43 <br></br>
            DEF: 0<br></br>
            Poison?: 40%<br></br>
            Numb?: 80%<br></br>
            Freeze?: 70%<br></br>
            Sleep?: 60%<br></br>
            Flips?: No<br></br>
            Weak to Ice? No <br></br>
            Base EXP: 20<br></br>
            Berry Value: 3<br></br>
            Easier than Dune Scorpion?: Yeah 😹<br></br>
            Bestiary ID: 056</h2>
          </Col>
          <Col> </Col>
        </Row>
     </Container>
    </div>)
    :
    (<div>
      <Image
        src="src/Assets/bugfabeble.png"></Image>
      <h1>Bug Fables: The Everlasting Sapling</h1>
      <h2>Any% 1.0.x Restricted Route</h2>
      <h3>(Horribly by Memory (and only in the time I had☠️☠️☠️))</h3>
      <Image
        src="src/Assets/bugmenu.png"
        width="50%"></Image>
      <h2><u>*Time Starts on Accepting File Name*</u></h2>
      <h1><u>Chapter 1: A Dysfunctional Trio</u></h1>
      <h3>Watch Intro Scene</h3> 
      <p>(Note: Double Mashing is optimal for 1.0.x by using two separate A Buttons)</p>
      <h3> Use <u>Crunchy Leaf</u> with <mark>Kabbu</mark> on <u>T1</u></h3>
      <h1><u>*Vi in Front*</u></h1>
      <h3>Walk outside of Explorer's Association and left to Outskirts</h3><br></br>
      <h1>*SET FPS TO <u>30</u>*</h1>
      <h3>*Perform ILS to obtain 10 Super Peppers on Vi* </h3>
      <h1>*SET FPS TO <u>60</u>*</h1>
      <h3>Continue heading West towards Snakemouth Den</h3>
      <p>Watch the Bridge Cutscene 😔</p>
      <h1><u>*Kabbu in Front*</u></h1>
      <h3>Collect Mushroom <mark>[1/10]</mark></h3>
      <h3>Do Nothing Spam with <mark>Kabbu</mark> during Sp*der Tutorial</h3>
      <h3>Second Sp*der Tutorial Fight: Attack <u>Web</u> with <mark>Vi</mark></h3>
      <p>Rescue Leif and watch Save Crystal Tutorial</p>
      <h1><u>*Vi in Front*</u></h1>
     <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
           src="src/Assets/swagstrat.png"
           width="90%"></Image></Col>
          <Col xs={12} md={6} lg={6} xl={6}>
          <h1><br></br>Head North and hit the Swag Crystal Strat <br></br>😎😎😎</h1></Col>
          </Row>
          </Container>
      </div>
      <p>Keep heading North</p>
      <div>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4} xl={4}> <Image
            src="src/Assets/Jellyshroomsprite.png"
            width="60%"></Image></Col>
          <Col xs={12} md={4} lg={4} xl={4}> <Image
            src="src/Assets/Jellyshroomsprite.png"
            width="60%"></Image></Col>
          <Col xs={12} md={4} lg={4} xl={4}>
      <h2><u>Jellyshroom x2<br></br><br></br>
      <mark>[6 HP/6 HP]</mark></u></h2>
      <h3>T1: Kabbu: Turn Relay to <u>Vi</u>, Vi: Attack x2</h3>
      <h3><mark>[14/100 Exploration Points]</mark></h3></Col>
      </Row>
      </Container>
      </div>
      <h3>Watch Vi get roasted, then head to top of the room</h3>

      <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}> 
          <video width="500" controls>
        <source src="src/assets/snakemouth skip.mp4" type="video/mp4"></source>
      </video></Col>
      <Col xs={12} md={6} lg={6} xl={6}>
         <h1><u><br></br>*Perform Snakemouth Skip*</u></h1>
         <p>(Video by: Stack Man)</p></Col>
      </Row>
      </Container>
      </div>
      <h3>Go North through the Mushroomroom to Treasure Room</h3>
     
      <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
          <h1><u>Sp*der<br></br><br></br>
          <mark>[34 HP]</mark></u></h1>
          <h2><br></br>T1: Vi: Tornado Toss</h2>
          <h2><mark>[36/100 Exploration Points]</mark></h2></Col>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
            src="src/Assets/spuder.png"
            width="60%"></Image></Col>
      </Row>
      </Container>
      </div>
      <h1><u>End of Chapter 1.</u></h1>
      <h3>After waking up, head to Ant Kingdom Plaza<br></br>
      After cutscene, head to Maki</h3>
      <h1><u>*Leif in Front*</u></h1>
      <h3>Talk to Queen Elizant, start Chapter 2</h3>
      <p>("Meh. Fine" ➡ "Of Course!")</p>
      <h1><u>Chapter 2: Sacred Golden Hills</u></h1>
      <h3>Leave room, watch Leif's Elizant cutscene</h3>
      <h1><u>*Vi in Front*</u></h1>
      <h3>Leif Hungry Cutscene<br></br>
      Walk left, have Fry cook your Mushroom <mark>[0/10]</mark></h3>
      <h3>Head South to Wasp Trooper Room</h3>
      <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
          <h1><u>Wasp Trooper<br></br><br></br>
          <mark>[14 HP, 1 DEF]</mark></u></h1>
          <h2><br></br>T1: Vi: Tornado Toss (miss two)</h2>
          <h2><mark>[51/100 Exploration Points]</mark></h2></Col>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
            src="src/Assets/wasp.png"
            width="60%"></Image></Col>
      </Row>
      </Container>
      </div>
      <h3>Go through Golden Path, heading towards the Golden Settlement</h3>
      <h3>Talk to Aria and select <u>"Wait for Nightfall."</u></h3>
      <h1><u>*Kabbu in Front*</u></h1>
      <h3>Talk to Zasp, then head West</h3>
      <h1><u>*Leif in Front*</u></h1>
      <h3>Talk to Chubee, then win the Eating Contest</h3>
      <h3>Play Whack-a-Worm with Vi and hit (at least) 15 Worms :3</h3>
      <h1><u>*Vi in Front*</u></h1>
      <h3>Go to Aria and select "Kabbu and Vi" (first option)</h3>
      <h3>Head South to Wasp Trooper Room</h3>
      <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
          <h1><u>Acolyte Aria<br></br><br></br>
          <mark>[23 HP]</mark></u></h1>
          <h2><br></br>T1: Vi: Tornado Toss (miss two)</h2>
          <h2><mark>[63/100 Exploration Points]</mark></h2></Col>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
            src="src/Assets/aria.png"
            width="35%"></Image></Col>
      </Row>
      </Container>
      </div>
      <h3>Head North, then Right after talking to Venus</h3>
      <h1>*SET FPS TO <u>30</u>*</h1>
      <h3><u>*Use PrtScn Lag to collec the Small Crank through the Wall*</u></h3>
      <h1>*SET FPS TO <u>60</u>*</h1>
      <h3>Leave room, insert crank, and go up</h3><br></br>
      <h1><u>*Leif in Front*</u></h1>
      <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}> 
          <video width="500" controls>
        <source src="src/assets/leifstrat.mp4" type="video/mp4"></source>
      </video></Col>
      <Col xs={12} md={6} lg={6} xl={6}>
      <br></br><h1><u><mark>*PERFORM<br></br><br></br>LEIF SKIP.*</mark></u></h1>
      <br></br><p>(Video by: Jankmo)</p></Col>
      </Row>
      </Container>
      </div>
      <h3>After obtaining crank, head West</h3>
      <div>
      <Container>
        <Row>
      <Col xs={12} md={6} lg={6} xl={6}>
      <br></br><h1><u>Freeze Numbnail and perform an Ice Clip to skip the Crank Room</u></h1>
      <br></br><p>(Video by: Stack Man)</p></Col>
      <Col xs={12} md={6} lg={6} xl={6}> 
          <video width="500" controls>
        <source src="src/assets/numbnail.mp4" type="video/mp4"></source>
      </video></Col>
      </Row>
      </Container>
      </div>
      <h3>Head North</h3>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}> 
          <video width="500" controls>
        <source src="src/assets/vbud.mp4" type="video/mp4"></source>
      </video></Col>
      <Col xs={12} md={6} lg={6} xl={6}>
      <br></br><h1><u>Freeze Acornling and perform Venus Bud Skip</u></h1>
      <br></br><p>(Video by: LyghtBF)</p></Col>
      </Row>
      </Container>
      <h1><u>*Vi in Front*</u></h1>
      <h3>Collect the other Big Half Crank<br></br>
          Head back to the start of Golden Hills</h3>
          <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
          <h1><u>Zasp & Mothiva 1<br></br><br></br>
          <mark>[27 HP/18 HP]</mark></u></h1>
          <h2><br></br>T1: Kabbu: Turn Relay to <u>*Vi*</u><br></br>
          Vi: Tornado Toss <u>Zasp</u> (miss one), Tornado Toss <u>Mothiva</u> (Miss Two)</h2>
          <h2><mark>[93/100 Exploration Points]</mark></h2></Col>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
            src="src/Assets/zimp.png"
            width="75%"></Image></Col>
      </Row>
      </Container>
      </div>
      <h3>Head into Upper Golden Hills</h3>
      <h3>Insert <u>Sun Offering</u> and then head East</h3>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}> 
          <video width="500" controls>
        <source src="src/assets/uppercrank.mp4" type="video/mp4"></source>
      </video></Col>
      <Col xs={12} md={6} lg={6} xl={6}>
      <br></br><h1><u>Freeze Acornling and perform Upper Golden Crank Skip</u></h1>
      <br></br><p>(Video by: Stack Man)</p></Col>
      </Row>
      </Container>
      <h3>Go left, hit switch, and insert <u>Moon Offering</u></h3>
      <h2><u>*Hit the Save Crystal before entering Venus' Room*</u></h2>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
          <h1><u>Venus' Guardian<br></br><br></br>
          <mark>[62 HP]</mark></u></h1>
          <h2><br></br>T1: Kabbu: Turn Relay to <u>*Vi*</u><br></br>
          Vi: Hurricane Toss x2</h2>
          <h2><mark>[18/100 Exploration Points]</mark></h2>
          <h2><u>Upgrade TP to 13</u></h2></Col>
          <Col xs={12} md={6} lg={6} xl={6}> <Image
            src="src/Assets/vegu.png"
            width="75%"></Image></Col>
      </Row>
      </Container>
      <h1><u>*END OF CHAPTER 2*</u></h1>
      <h1>If you want the rest of the Route, join the Bug Fables Speedrunning Server c:</h1>
      <h1>Also, Subscribe to NachoWizard on YouTube for more Bug Fables Content!!!</h1>
      <Image
      src="src/Assets/realwiz.png"
      width="65%"></Image>
    </div>)
  }
    
  </>)
}

export default App