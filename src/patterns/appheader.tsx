import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  FlexItem,
  NavigationItem,
  StackLayout,
  Text,
  useResponsiveProp,
} from "@salt-ds/core";

import { MenuIcon, GithubIcon } from "@salt-ds/icons";

import { HashLink } from "react-router-hash-link";
import wsIcon from "../assets/img/weestoater-icon.png";

export const Header = () => {
  const [openPrimary, setOpenPrimary] = useState(false);
  const isMobile = useResponsiveProp(
    {
      xs: true,
      sm: false,
    },
    false
  );

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
          <GithubIcon className="icon" data-testid="github-icon" />
        </FlexItem>
      </StackLayout>
    </header>
  );
};
