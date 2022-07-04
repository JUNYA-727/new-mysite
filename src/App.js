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
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"ABOUT"} />
          </ListItemButton>
        </ListItem>
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <>
      <div style={{ display: "flex", height: "9vh", backgroundColor: "black" }}>
        <div>
          <h1 style={{ fontSize: "3vh", color: "white" }}>Junya Kuramochi</h1>
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
          height: "91vh",
          backgroundColor: "black",
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
          </Swiper>
        </div>
      </div>
      {/*
      <div
        style={{
          width: "100%",
          paddingTop: "5%",
        }}
      >
        <div style={{ display: "flex", paddingLeft: "5%", paddingRight: "5%" }}>
          <img
            src="main-swiper/photo1.jpg"
            alt=""
            width={"48%"}
            style={{ paddingRight: "2%" }}
          ></img>
          <img
            src="main-swiper/photo2.jpg"
            alt=""
            width={"50%"}
            style={{ paddingTop: "5%", paddingBottom: "5%" }}
          ></img>
        </div>
      </div> */}
      <div id="jumpskill">
        <h1>SKILL</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="skill-card">
          <Card sx={{ maxWidth: 300 }} style={{ margin: "auto" }}>
            <CardHeader title="Python" subheader="開発経験 2021/01〜" />
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
                <Typography paragraph>・ポートフォリオサイトの作成</Typography>
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
                ReactはJavaScrptのフレームワーク・ライブラリの1つ。webサイトの作成といったフロントエンド開発をするにあたり確実に使われる技術。仮想DOMによってサクサクページが動くのと、スマホアプリも作れる、コードの修正もしやすい。
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
                <Typography>React.js</Typography>
                <Typography paragraph></Typography>
                <Typography paragraph>開発経験</Typography>
                <Typography paragraph>・歯科クリニックのサイト作成</Typography>
                <Typography paragraph>・ポートフォリオサイトの作成</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
