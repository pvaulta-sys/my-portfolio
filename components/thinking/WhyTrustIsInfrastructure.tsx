export function WhyTrustIsInfrastructure() {
  return (
    <article className="article-prose">
      <p className="article-prose__lead">
        Trust is often described as a feeling — a brand attribute earned over time. In
        infrastructure, trust is something more concrete: an architectural constraint.
      </p>

      <h2 id="trust-as-architecture">Trust as architecture</h2>
      <p>
        When a treasury team approves a transfer, they are not just trusting the person who
        submitted it. They are trusting that the approval chain cannot be bypassed, that the audit
        log cannot be rewritten, and that the balance shown reflects reality. That confidence does
        not come from policy documents. It comes from how the system is built.
      </p>
      <p>
        The same applies in security operations. A finding is trustworthy when the evidence
        supporting it is verifiable, the remediation steps are traceable, and the workflow
        cannot be closed without resolution. Trust is the property of a system that behaves
        consistently under scrutiny.
      </p>

      <h2 id="designing-for-audit">Designing for audit</h2>
      <p>
        The simplest test of infrastructure trustworthiness is the audit question: can you
        reconstruct what happened, when, and who approved it? If the answer requires stitching
        together logs from three systems and a Slack thread, the architecture is not trustworthy.
      </p>
      <p>
        Building for trust means designing states that are explicit, transitions that are
        authorized, and records that are immutable. It means that every action has an owner,
        every exception has a path, and every status reflects an actual operational reality — not
        a UI convenience.
      </p>

      <h2 id="trust-scales-through-structure">Trust scales through structure</h2>
      <p>
        Small teams can operate on verbal trust. As organizations grow, verbal trust frays.
        Infrastructure trust — trust embedded in systems — is what allows an organization to
        scale without requiring everyone to know everyone. When the system enforces the right
        constraints, teams can delegate authority, distribute responsibility, and still sleep at
        night.
      </p>
      <p>
        This is why infrastructure is not a cost center. It is the mechanism by which trust is
        made operational. And operational trust is the only kind that scales.
      </p>
    </article>
  );
}
