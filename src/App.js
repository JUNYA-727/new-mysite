/** @format */
/*
・メールのお問い合わせ機能の追加
・tailwindでさらに色をつける
・画像を加えてもいいかも
・パソコンとスマホ用に適したサイズで返すようにする。
*/
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ComputerIcon from "@mui/icons-material/Computer";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import { Link as Scroll } from "react-scroll";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Scroll to='jumphome' smooth='true' onClick={toggleDrawer(anchor,false)}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} />
          </ListItemButton>
        </ListItem>
      </List>
      </Scroll>
      <Divider />
      <Scroll
        to="jumpskill"
        smooth="ture"
        onClick={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ComputerIcon />
              </ListItemIcon>
              <ListItemText primary={"SKILL"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Scroll>
      <Divider />
      <List>
        <Scroll to="jumpcareer" smooth='true' onClick={toggleDrawer(anchor,false)}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <WorkspacePremiumIcon></WorkspacePremiumIcon>
            </ListItemIcon>
            <ListItemText primary={"CAREER"} />
          </ListItemButton>
        </ListItem>
        </Scroll>
      </List>
      <List>
        <Scroll to="jumpabout" smooth='true' onClick={toggleDrawer(anchor,false)}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon></AccountCircleIcon>
            </ListItemIcon>
            <ListItemText primary={"ABOUT"} />
          </ListItemButton>
        </ListItem>
        </Scroll>
      </List>
    </Box>
  );
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3,setExpanded3]=React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3=()=>{
    setExpanded3(!expanded3);
  }
  return (
    <>
    <div id='jumphome' style={{backgroundColor:'black',width:'100%'}}>
      <div style={{ display: "flex", height: "8vh", backgroundColor: "black",position:'fixed',width:'100%',zIndex:'2'}}>
        <div>
          <h1 style={{ fontSize: "3vh", color: "white",paddingLeft:'3vw'}} className='main-header'>Junya Kuramochi</h1>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <React.Fragment key={"top"}>
            <IconButton
              onClick={toggleDrawer("top", true)}
              style={{ height: "100%", color: "white" }}
            >
              <ListIcon fontSize={"large"} />
            </IconButton>
            <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
            >
              {list("top")}
            </Drawer>
          </React.Fragment>
        </div>
      </div>
      <div
        style={{
          height: "92vh",
          backgroundColor: "black",
          paddingTop:'9vh'
        }}
      >
        <div
          style={{
            verticalAlign: "center",
            paddingTop: "10%",
            paddingBottom: "10%",
          }}
        >
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={500}
          >
            <SwiperSlide>
              <img src="main-swiper/photo1.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo2.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo3.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo4.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo5.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo6.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo7.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo8.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo9.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="main-swiper/photo10.jpg" alt="" width={"100%"}></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div id="jumpskill" style={{backgroundColor:'white',paddingTop:'6vh'}}>
      <div  >
        <h1 style={{color:'black',textAlign:'center'}} className='test-font'>SKILL</h1>
      </div>
      <div style={{ textAlign: "center",backgroundColor:'white'}}>
        <div className="skill-card">
          <Card sx={{ maxWidth: 300 }} style={{ margin: "auto" }}>
            <CardHeader title="Python" subheader="開発経験 2020/11〜" />
            <CardMedia
              component="img"
              height="194"
              image="programming/python.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Pythonは、機械学習を使った人工知能の開発、自動データ処理、データ分析が可能になる。
                また、バックエンド開発ではDjango、Flask等が存在するため幅広い分野で学習することができる。
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>使用技術</Typography>
                <Typography>
                  Django / Flask / TensorFlow / Keras / Opencv / Lightgbm
                </Typography>
                <Typography paragraph></Typography>
                <Typography paragraph>開発経験</Typography>
                <Typography paragraph>
                  ･ TensorFlow / Lightgbm
                  を使用したビットコインの価格の時系列分析及び自動売買モデルの作成､シミュレーション
                </Typography>
                <Typography paragraph>
                  ･ TensorFlow / Dlib
                  を使用したリアルタイムパーソナルカラー診断システムの作成
                </Typography>
                <Typography paragraph>
                  ･ Flask / Django でのバックエンド開発
                </Typography>
                <Typography paragraph>
                  ･ Mask R-CNN を用いたコンクリートのひび割れ検出モデルの作成
                </Typography>

                <Typography paragraph>
                  ･YOLOを使った物体検出モデルの作成
                </Typography>
                <Typography paragraph>
                <video autoPlay muted loop playsInline width={"100%"}>
                    <source src="programming/car.mp4"></source>
                  </video>
                  </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="skill-card">
          <Card sx={{ maxWidth: 300 }} style={{ margin: "auto" }}>
            <CardHeader title="React.js" subheader="開発経験 2022/04〜" />
            <CardMedia
              component="img"
              height="194"
              image="programming/react.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React.jsはJavaScrptのフレームワーク・ライブラリの1つ。webサイトの作成といったフロントエンド開発をするにあたり確実に使われる技術。仮想DOMによってサクサクページが動くのと、スマホアプリも作れる、コードの修正もしやすい。
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <ExpandMore
                expand={expanded1}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>使用技術</Typography>
                <Typography>React.js</Typography>
                <Typography paragraph></Typography>
                <Typography paragraph>開発経験</Typography>
                <Typography paragraph>・歯科クリニックのサイト作成</Typography>
                <Typography paragraph>・ポートフォリオサイトの作成</Typography>
                <Typography paragraph>
                  <img src='programming/flow.jpg' alt='flow' width={'100%'}></img>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="skill-card">
          <Card sx={{ maxWidth: 300 }} style={{ margin: "auto" }}>
            <CardHeader title="Next.js" subheader="開発経験 2022/05〜" />
            <CardMedia
              component="img"
              height="194"
              image="programming/next.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Next.jsはReactをベースに開発されたJavaScriptフレームワーク。Next.jsはサーバー機能が備わっている。また。SSR/SSG,サーバーによる高速リロード、画像最適化が備わっているためSEO対策にかなり有効。
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <ExpandMore
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>使用技術</Typography>
                <Typography>Next.js</Typography>
                <Typography paragraph></Typography>
                <Typography paragraph>開発経験</Typography>
                <Typography paragraph>・ポートフォリオサイトの作成(SEO対策にて満点)</Typography>
                <Typography paragraph>
                  <img src='programming/seo.png' alt='seo' width={'100%'}></img>
                </Typography>
                </CardContent>
            </Collapse>
          </Card>
        </div>
        <div className="skill-card">
          <Card sx={{ maxWidth: 300 }} style={{ margin: "auto" }}>
            <CardHeader title="MySQL" subheader="開発経験 2022/03〜" />
            <CardMedia
              component="img"
              height="194"
              image="programming/mysql.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                MySQLとは､最も利用されているデータベース管理システムの1つであり､webアプリケーションの顧客情報､商品情報などの様々なデータを管理することが可能になる｡
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>開発経験</Typography>
                <Typography paragraph>･楽天株式会社の1ヶ月実務インターンにて楽天Payのデータベース分析､及びBIツールを用いた自動可視化システムの作成｡</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
      </div>
      </div>
      <div id='jumpcareer' style={{paddingTop:'6vh'}}>
        <h1 style={{textAlign:'center'}} className='test-font'>
          CAREER
        </h1>
      </div>
      <div class="timeline">
    <ul class="timeline-list">
        <li class="timeline-list-item">
            <div class="date">2020年11月</div>
            <div class="content">Pythonでの開発を始める</div>
        </li>
        <li class="timeline-list-item">
            <div class="date">2021年12月</div>
            <div class="content">SIGNASTEにおいて異常物体検出コンペで入賞する｡</div>
        </li>
        <li class="timeline-list-item">
            <div class="date">2022年03月</div>
            <div class="content">楽天株式会社にて1ヶ月のエンジニアとして実務インターン</div>
        </li>
        <li class="timeline-list-item">
            <div class="date">2022年04月</div>
            <div class="content">フロントエンド技術のReact.jsでの開発を始める｡</div>
        </li>
        <li class="timeline-list-item">
            <div class="date">2022年05月</div>
            <div class="content">Next.jsでの開発を始める｡</div>
        </li>
        <li class="timeline-list-item">
            <div class="date">2023年04月</div>
            <div class="content">外資コンサルにてエンジニアで就業予定｡</div>
        </li>
    </ul>
</div>
<div id='jumpabout' style={{paddingTop:'6vh'}}>
  <h1 style={{textAlign:'center'}} className='test-font'>About</h1>
  <div style={{textAlign:'center'}}>
    <img src="me/1.jpg" alt='me' width={'50%'} style={{borderRadius:'50%'}} ></img>
  </div>
  <div style={{paddingLeft:'20%',}}>
  <p>
    氏名 : 倉持純也 (くらもちじゅんや)  
    </p>  
    <p>
      職業 : 大学4年生
    </p>
    <p>
      趣味 : スノーボード
    </p>
    </div>
    <div style={{paddingTop:'10%',paddingRight:"2%",paddingLeft:"2%",backgroundColor:'black'}}>  
      <div>
        <img src='me/6.jpg' alt='' width={'48%'} style={{paddingRight:'2%',verticalAlign:'middle' }}></img>
        <img src="me/9.jpg" alt='' width={'48%'} style={{paddingLeft:'2%',verticalAlign:'middle'}}></img>
      </div>
      <div style={{paddingTop:'3%'}}>
        <img src='me/5.jpg' alt='' width={'48%'} style={{paddingRight:'2%',verticalAlign:'middle'}}></img>
        <img src="me/4.jpg" alt='' width={'48%'} style={{paddingLeft:'2%',verticalAlign:'middle'}}></img>
      </div>
      <div style={{paddingTop:'3%',paddingBottom:'3%'}}>
        <img src='me/2.jpg' alt='' width={'48%'} style={{paddingRight:'2%',verticalAlign:'middle'}}></img>
        <img src="me/7.jpg" alt='' width={'48%'} style={{paddingLeft:'2%',verticalAlign:'middle'}}></img>
      </div>
    </div>
   <div style={{textAlign:'center'}}>
   <IconButton
                variant="outlined"
                href="https://github.com/JUNYA-727"
                style={{ zIndex: 1 }}
              >
                <GitHubIcon style={{color:'black'}} fontSize="medium"></GitHubIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                href="https://www.instagram.com/junyq_/"
                style={{ zIndex: 1 }}
              >
                <InstagramIcon
                  color="secondary"
                  fontSize="medium"
                ></InstagramIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                href="https://twitter.com/JUNY4_"
                style={{ zIndex: 1 }}
              >
                <TwitterIcon color="primary" fontSize="medium"></TwitterIcon>
              </IconButton>

    </div>
</div>
    </>
  );
}

export default App;
