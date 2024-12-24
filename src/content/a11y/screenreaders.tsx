import { Card } from "@salt-ds/core";
import {
  AccessibleIcon,
  ApiIcon,
  HeadphonesIcon,
  VolumeUpIcon,
} from "@salt-ds/icons";
import { Binoculars } from "@phosphor-icons/react";

export const ScreenReaders = () => {
  return (
    <Card>
      <h2>
        <AccessibleIcon size={2} /> Learn to use Screen Readers
      </h2>
      <div className="card-content">
        <div className="right">
          <Binoculars size={64} />
        </div>
        <p>
          Since joining a new team at the start of Dec '24 I've been knee deep
          in learning screen readers. A few of my colleagues are visually
          impaired and use them all the time to perform their respective work
          duties. Others in the team, like myself, use them to test the
          Accessibility compliance of software and other digitial products
          inside the firm.
        </p>

        <div className="left">
          <HeadphonesIcon size={5} />
        </div>

        <p>
          The two main ones used are <strong>JAWS</strong> and{" "}
          <strong>NVDA</strong>. They are both very comprehensive in the
          functionality that they offer and have a large array of keyboard
          shortcuts to learn in order to use them efficiently. I use a MacBook
          at work, so I also have access to Apple <strong>VoiceOver</strong>,
          which is pretty similar and very useful. Make sure you have your{" "}
          <strong>headphones</strong> though, can be noisy little buggers.
        </p>

        <div className="right">
          <ApiIcon size={5} />
        </div>
        <p>
          It is incredibly humbling to use them on websites I've built, with
          over 20 years of experience in web development and front end skills,
          I'd considered myself an expert in building Accessible and
          semantically clean projects. After passing NVDA over one of them, I
          was surprised to see very simple things that I thought were effective
          proving to be a lot more convoluted than they should have been.
        </p>

        <div className="left">
          <VolumeUpIcon size={5} />
        </div>
        <p>
          For that reason alone I would{" "}
          <strong>
            <code>&lt;STRONGLY&gt;</code>
          </strong>{" "}
          recommend using Screen Readers as part of your development processes.
          Lay out the <code>landmarks</code> in your design. Make sure
          everything is keyboard focusable that needs to be, test using the{" "}
          <strong>AxeDevtools</strong> plugin for Chrome and then try to 'read'
          your site using NVDA or JAWS.
        </p>
      </div>
    </Card>
  );
};
