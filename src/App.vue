<template>
  <div>
    <Accordion></Accordion>
<Alert></Alert>
<BarChart></BarChart>
<Breadcrumb></Breadcrumb>
<Button></Button>
<Card></Card>
<Carousel></Carousel>
<CircleChart></CircleChart>
<Collapse></Collapse>
<DataPicker></DataPicker>
<DateTimePicker></DateTimePicker>
<Divider></Divider>
<Drawer></Drawer>
<DropdownButtons></DropdownButtons>
<Forms></Forms>
<FormCheckbox></FormCheckbox>
<FormRadiobox></FormRadiobox>
<FormSelect></FormSelect>
<FormTextarea></FormTextarea>
<FormToggle></FormToggle>
<GroupButton></GroupButton>
<GridSystem></GridSystem>
<Icon></Icon>
<Image></Image>
<InputEmail></InputEmail>
<InputFile></InputFile>
<InputNumber></InputNumber>
<InputPassword></InputPassword>
<InputText></InputText>
<Label></Label>
<LineChart></LineChart>
<LinkGroup></LinkGroup>
<List></List>
<ListGroup></ListGroup>
<Loader></Loader>
<MessageBox></MessageBox>
<Modal></Modal>
<NavBar></NavBar>
<NavLink></NavLink>
<Pagination></Pagination>
<PageFooter></PageFooter>
<PageHeader></PageHeader>
<ProgressBar></ProgressBar>
<SearchBar></SearchBar>
<Sidebar></Sidebar>
<Slider></Slider>
<Tab></Tab>
<Tags></Tags>
<Text></Text>
<Tooltip></Tooltip>
<UserProfileImage></UserProfileImage>

    
  </div>
</template>

<script>
 import Alert from './components/content/Alert.vue';
import Icon from './components/content/Icons.vue';
import Carousel from './components/content/ImagesCarousel.vue';
import Label from './components/content/Label.vue';
import List from './components/content/List.vue';
import MessageBox from './components/content/MessageBox.vue';
import Modal from './components/content/Modal.vue';
import PageFooter from './components/content/PageFooter.vue';
import PageHeader from './components/content/PageHeader.vue';
import ProgressBar from './components/content/ProgressBar.vue';
import Sidebar from './components/content/Sidebar.vue';
import Table from './components/content/Table.vue';
import Tooltip from './components/content/Tooltip.vue';

import FormCheckbox from './components/forms/FormCheckbox.vue';
import FormRadiobox from './components/forms/FormRadiobox.vue';
import FormSelect from './components/forms/FormSelect.vue';
import FormTextarea from './components/forms/FormTextarea.vue';
import FormToggle from './components/forms/FormToggle.vue';

import Accordion from './components/containers/Accordion.vue';
import Card from './components/containers/Card.vue';
import Collapse from './components/containers/Collapse.vue';

import Breadcrumb from './components/navigation/Breadcrumb.vue';
import Drawer from './components/navigation/Drawers.vue';
import LinkGroup from './components/navigation/LinkGroup.vue';
import ListGroup from './components/navigation/ListGroup.vue';
import NavBar from './components/navigation/NavBar.vue';
import NavLink from './components/navigation/NavLinks.vue';
import Pagination from './components/navigation/Pagination.vue';
import SearchBar from './components/navigation/SearchBar.vue';
import Tab from './components/navigation/Tabs.vue';
import Tags from './components/navigation/Tags.vue';

import BarChart from './components/others/BarChart.vue';
import CircleChart from './components/others/CircleChart.vue';
import DataPicker from './components/others/DataPicker.vue';
import Divider from './components/others/Divider.vue';
import GridSystem from './components/others/GridSystem.vue';
import Image from './components/others/Image.vue';
import LineChart from './components/others/LineChart.vue';
import Loader from './components/others/Loader.vue';
import Text from './components/others/Text.vue';
import UserProfileImage from './components/others/UserProfileImage.vue';
import Slider from './components/slider/Sliders.vue';

import Forms from './components/Froms.vue';
import DateTimePicker from './components/Inputs/DateTimePicker.vue';
import InputEmail from './components/Inputs/InputEmail.vue';
import InputFile from './components/Inputs/InputFile.vue';
import InputNumber from './components/Inputs/InputNumber.vue';
import InputPassword from './components/Inputs/InputPassword.vue';
import InputText from './components/Inputs/InputText.vue';
import Button from './components/buttons/Button.vue';
import DropdownButtons from './components/buttons/DropdownButtons.vue';
import GroupButton from './components/buttons/GroupButton.vue';



  export default{
    components: {
      Button,
Card,
Carousel,
Collapse,
DataPicker,
DateTimePicker,
Divider,
DropdownButtons,
Drawer,
Forms,
FormCheckbox,
FormRadiobox,
FormSelect,
FormTextarea,
FormToggle,
GroupButton,
Icon,
Image,
InputEmail,
InputFile,
InputNumber,
InputPassword,
InputText,
Label,
LineChart,
LinkGroup,
List,
ListGroup,
Loader,
MessageBox,
Modal,
NavBar,
NavLink,
Pagination,
PageFooter,
PageHeader,
ProgressBar,
SearchBar,
Sidebar,
Slider,
Tab,
Tags,
Text,
Tooltip,
UserProfileImage,

Accordion,
Alert,
BarChart,
Breadcrumb,
CircleChart,
GridSystem,
List,
Table,

    },
    methods: {
    showAlert() {
      this.$refs.messageBox.showMessage('Hello, this is a message!');
    },
  },
  }
</script>

<style scoped>

</style>
