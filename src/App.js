/** @format */
/*
・メールのお問い合わせ機能の追加
・tailwindでさらに色をつける
・画像を加えてもいいかも
・パソコンとスマホ用に適したサイズで返すようにする。
*/
import "./App.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText  primary={'HOME'}/>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon/>
            </ListItemIcon>
            <ListItemText primary={'SKILL'}/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider/>
      <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
          <ListItemText primary={'ABOUT'}/>
        </ListItemButton>
      </ListItem>
</List>
    </Box>
  );
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
    <>
  <div style={{display:'flex',height:'9vh'}}>
    <div>
      <h1 style={{fontSize:'3vh'}}>Junya Kuramochi</h1>
      </div>
      <div style={{marginLeft:'auto'}}>
        <React.Fragment key={'top'}>
          <IconButton onClick={toggleDrawer('top', true)} style={{height:'100%'}}>
            <ListIcon fontSize={'large'} />
          </IconButton>
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer(('top'), false)}
          >
            {list('top')}
          </Drawer>
        </React.Fragment>
        </div>
  </div>
  <div style={{textAlign:'center',justifyContent:'center',display:'flex'}}>
  <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        title="Python"
        subheader="2021/01〜"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <GitHubIcon/>
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
          <Typography paragraph>

          </Typography>
          <Typography paragraph>
            開発経験
          </Typography>
          <Typography paragraph>
            ･ TensorFlow / Lightgbm を使用したビットコインの価格の時系列分析及び自動売買モデルの作成､シミュレーション
          </Typography>
          <Typography paragraph>
            ･ TensorFlow / Dlib を使用したリアルタイムパーソナルカラー診断システムの作成
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
    </>
  );
}

export default App;
