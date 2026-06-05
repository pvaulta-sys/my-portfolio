export function BuildingSystemsInsteadOfFeatures() {
  return (
    <article className="article-prose">
      <p className="article-prose__lead">
        Features are how products are sold. Systems are how products survive. The gap between
        the two is where most infrastructure projects stall.
      </p>

      <h2 id="the-demo-trap">The demo trap</h2>
      <p>
        Every demo tells a story. The user logs in, sees a clean interface, performs an action,
        and gets a result. The demo is truthful about what the software can do. It is silent
        about what happens when the user does that action a thousand times, across ten entities,
        with different permission levels, during an incident.
      </p>
      <p>
        Systems thinking starts where the demo ends. It asks: what are the states, transitions,
        and invariants? Who is allowed to do what, and how do we prove it? What happens when a
        step fails — does the workflow halt gracefully or corrupt data? These questions do not
        make it into slide decks, but they determine whether a product survives its first year
        in production.
      </p>

      <h2 id="features-are-costs-systems-are-assets">Features are costs; systems are assets</h2>
      <p>
        A feature satisfies a near-term need. A system creates optionality for the future. When
        you build a feature, you get a capability. When you build a system, you get the ability
        to add more capabilities without breaking the ones you already have.
      </p>
      <p>
        The distinction matters because most teams optimize for the wrong time horizon. In the
        early stage, features are survival. In the growth stage, systems are survival. The
        transition is painful because it requires unlearning habits that worked at a smaller
        scale. But the teams that make it are the ones that understand infrastructure is not a
        project phase — it is a continuous design constraint.
      </p>

      <h2 id="what-to-invest-in">What to invest in</h2>
      <p>
        Building systems instead of features means investing in data models, state machines,
        permission frameworks, and integration boundaries before the UI is polished. It means
        saying no to the feature that would require a hack, and yes to the refactor that enables
        the next ten features to be clean.
      </p>
      <p>
        It is not glamorous work. But it is the work that compounds. Features age. Systems
        accumulate capability. Founders who build systems are not just shipping software — they
        are building organizations.
      </p>
    </article>
  );
}
