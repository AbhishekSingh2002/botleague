import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import { SIGNUP_FORMS } from '../../data/content';

export default function JoinEcosystem() {
  return (
    <section className="bg-ink-black py-16 lg:py-24">
      <Container>
        <SectionHeading title="Join The Ecosystem" className="mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {SIGNUP_FORMS.map((title) => (
            <form
              key={title}
              className="card p-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-display text-lg uppercase mb-6">{title}</h3>
              <div className="space-y-4">
                <TextInput placeholder="Name" aria-label={`Name for ${title}`} />
                <TextInput placeholder="Location" aria-label={`Location for ${title}`} />
                <TextInput placeholder="Enroll" aria-label={`Enroll for ${title}`} />
                <Button type="submit" variant="primary" className="w-full py-3.5 text-base mt-1">
                  SIGN UP
                </Button>
              </div>
            </form>
          ))}
        </div>
      </Container>
    </section>
  );
}
