interface LinkProps {
  label: string;
  link: string;
}

function Link(props: LinkProps): JSX.Element {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="font-bold hover:text-purple hover:underline active:text-purple active:underline"
    >
      {props.label}
    </a>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-row flex-wrap justify-center mx-2 py-5 text-xs text-smokeyGrey">
      <div>
        Challenge by{" "}
        <Link
          label="Frontend Mentor"
          link="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q"
        />
        . Coded by{" "}
        <Link
          label="Phillip Lam"
          link="https://github.com/philliplam8/age-calculator-app-challenge"
        />
        .
      </div>
    </footer>
  );
}
