import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return {open, handleClose, handleOpen};
}

export const ModalExito = (props) => {
    const classes = useStyles();
    const {open, handleClose, handleOpen} = useModal();
    let button;

    if(!props.buttonDissable){
        button = <button type="submit" onClick = {handleOpen} className="btn btn-primary btn-block">¡Enviar consulta!</button>
    }else{
        button = <button type="submit" onClick = {handleOpen} className="btn btn-primary btn-block disabled" disabled="disabled">¡Enviar consulta!</button>
    }
  return (
    <div>
      {button}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.children}</h2>
            <p className="text-center"><CheckCircleOutlineIcon style={{ color: green[500] }} style={{ fontSize: 100 }}></CheckCircleOutlineIcon></p>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}