import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  FlexItem,
  NavigationItem,
  StackLayout,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  useResponsiveProp,
} from "@salt-ds/core";

import { DarkIcon, LightIcon, MenuIcon, BooleanIcon } from "@salt-ds/icons";

import { HashLink } from "react-router-hash-link";
import wsIcon from "../assets/img/weestoater-icon.png";

export const Header = (props: any) => {
  const [openPrimary, setOpenPrimary] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);

  const isMobile = useResponsiveProp({ xs: true, sm: false }, false);

  const items = [
    "Home",
    "About",
    "A11y",
    "Agile",
    "Football",
    "Landie",
    "React",
  ];
  const [active, setActive] = useState(items[0]);

  const handleTheme = props.themechanger;
  const themeMode = props.currenttheme;
  const handleDensity = props.densitychanger;
  const cdensity = props.currentdensity;

  const handleRightDrawerRequest = () => {
    setOpenRightDrawer(!openRightDrawer);
  };

  return (
    <header>
      <HashLink
        smooth
        to="#main-content"
        className="skip-link"
        data-testid="main-content-skip-link"
      >
        Skip to main content
      </HashLink>
      <StackLayout direction="row" className="app-header">
        {isMobile ? (
          <FlexItem className="header-menu-icon">
            {openPrimary ? (
              <></>
            ) : (
              <Button
                variant="secondary"
                onClick={() => setOpenPrimary(true)}
                className="header-menu-btn"
              >
                <MenuIcon />
              </Button>
            )}
            <Drawer open={openPrimary} id="primary">
              <DrawerCloseButton onClick={() => setOpenPrimary(false)} />
              {items.map((item) => (
                <NavigationItem
                  key={item}
                  active={active === item}
                  orientation="vertical"
                  href={`./#/${item.toLowerCase()}`}
                  onClick={() => {
                    setActive(item);
                  }}
                >
                  {item}
                </NavigationItem>
              ))}
            </Drawer>
          </FlexItem>
        ) : (
          <FlexItem className="header-menu-icon"></FlexItem>
        )}
        <FlexItem className="header-app-logo">
          <img src={wsIcon} alt="weestoater logo" />
          <Text>weestoater</Text>
        </FlexItem>
        {!isMobile ? (
          <FlexItem className="header-nav">
            <StackLayout as="ul" direction="row" gap={1}>
              {items.map((item) => (
                <li key={item}>
                  <NavigationItem
                    active={active === item}
                    href={`#/${item.toLowerCase()}`}
                    onClick={() => {
                      setActive(item);
                    }}
                  >
                    {item}
                  </NavigationItem>
                </li>
              ))}
            </StackLayout>
          </FlexItem>
        ) : (
          <></>
        )}
        <FlexItem className="header-utils">
          <Button
            onClick={handleRightDrawerRequest}
            variant="secondary"
            className="densityBtn"
            title="Density switcher"
            data-testid="density-switcher"
          >
            <BooleanIcon />
          </Button>
          <Drawer
            open={openRightDrawer}
            position="right"
            className="right-drawer"
          >
            <DrawerCloseButton onClick={() => setOpenRightDrawer(false)} />

            <h2>Theme</h2>

            <ToggleButtonGroup
              onChange={handleTheme}
              value={themeMode}
              orientation="vertical"
            >
              <ToggleButton
                aria-label="light theme"
                title="Light mode"
                value="light"
              >
                <LightIcon /> Light
              </ToggleButton>
              <ToggleButton
                aria-label="dark theme"
                title="Dark mode"
                value="dark"
              >
                <DarkIcon /> Dark
              </ToggleButton>
            </ToggleButtonGroup>
            <br />
            <br />

            <h2>Density</h2>
            <ToggleButtonGroup
              aria-label="density selector"
              onChange={handleDensity}
              value={cdensity}
              orientation="vertical"
            >
              <ToggleButton value="high">High </ToggleButton>
              <ToggleButton value="medium">Medium</ToggleButton>
              <ToggleButton value="low">Low</ToggleButton>
              <ToggleButton value="touch">Touch</ToggleButton>
            </ToggleButtonGroup>
          </Drawer>
        </FlexItem>
        <FlexItem></FlexItem>
      </StackLayout>
    </header>
  );
};
