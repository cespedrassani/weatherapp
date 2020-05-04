import React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemText, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";

const DialogCities = ({ onClose, open, cities, city, getWeatherByCoordinates}) => (
  <Dialog 
    onBackdropClick={ () => onClose(city) }
    onClose={() => onClose(city)} 
    aria-labelledby="simple-dialog-title" 
    open={open}
  >
    <DialogTitle id="simple-dialog-title">Selecione sua cidade</DialogTitle>
    { cities.length > 0 ? (
      <List>
        {// eslint-disable-next-line array-callback-return
          cities.map((obj) => {
          if (obj.components.city) {
            return (
              <ListItem button onClick={() => getWeatherByCoordinates(obj.geometry)} key={obj.components.postcode}>
                <ListItemText primary={`${obj.components.city}, ${obj.components.country}`} />
              </ListItem>
            )
          }
        })}
      </List> 
    ) 
      : <>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Nenhuma cidade encontrada. 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ ()=> onClose(city) } color="primary">OK</Button>
      </DialogActions>
      </>
      }
  </Dialog>
);

export default DialogCities;