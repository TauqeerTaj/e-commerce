import React, { useState } from "react";

import { List, ListItem, ListItemText, Collapse } from "@mui/material";

//Constants
import { profileSidebarList } from "@/constant";

//Styles
import Styles from "@/styles/profileSidebar.module.css";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List sx={{ m: 0, p: 0 }} className={Styles.list}>
        {profileSidebarList.map((item) =>
          item.subText ? (
            <>
              <ListItem
                onClick={handleClick}
                sx={{ pl: 0, pt: 0 }}
                className={Styles.boldHeading}
              >
                <ListItemText primary={item.text} />
              </ListItem>
              <Collapse
                in={true}
                timeout="auto"
                unmountOnExit
                sx={{ pl: 1 }}
                className={Styles.collapse}
              >
                <List component="div" disablePadding>
                  {item.subText.map((data) => (
                    <ListItem key={data.text}>
                      <ListItemText primary={data.text} sx={{ mb: 0, mt: 0 }} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              onClick={handleClick}
              sx={{ pl: 0, pt: 0 }}
              className={Styles.boldHeading}
              key={item.text}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          )
        )}
      </List>
    </>
  );
};

export default Sidebar;
