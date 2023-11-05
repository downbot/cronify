import React, { useState } from 'react';
import {Card, Button, Toolbar, Icon, Tabbar, Tab, TabPage} from 'react-onsenui';

// onPreChange={setIndex}
// onPostChange={() => console.log('postChange')}
// onReactive={() => console.log('postChange')}
function MainTab() {
  const [index, setIndex] = useState(0);
  return (
      <Tabbar
        

        position='top'
        activeIndex={index}
        renderTabs={(activeIndex1, tabbar) => [
          {
            content: <div />,
            tab: <Tab label="Home"  icon="md-home" />
          },
          {
            content: <div />,
            tab: <Tab label="Settings" icon="md-settings" />
          }]
        }
      />
  );
}

export default MainTab;
