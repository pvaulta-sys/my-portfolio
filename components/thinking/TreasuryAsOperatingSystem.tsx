export function TreasuryAsOperatingSystem() {
  return (
    <article className="article-prose">
      <p className="article-prose__lead">
        Most treasury software is built as a feature: a dashboard that shows cash positions, a CSV
        export for the accountants, a few alerts when balances run low. But treasury is not a
        feature—it is the operating system that money flows through. Approvals, reconciliation,
        forecasting, compliance, entity boundaries. These are not widgets on a screen. They are the
        kernel of financial operations. Vaulta starts there.
      </p>

      <h2 id="what-treasury-actually-is">What treasury actually is</h2>
      <p>
        Treasury is not tracking. Tracking is what spreadsheets do. Treasury is authorization—who can
        move money, how much, to whom, and under what conditions. It is reconciliation—matching what
        the system says happened against what the bank says happened and surfacing every gap. It is
        forecasting— projecting cash positions across entities, currencies, and time horizons. And it
        is compliance—ensuring that every action has an audit trail that regulators and external
        auditors can follow without interpretation.
      </p>
      <p>
        This is not a set of features to bolt onto an accounting tool. It is the kernel of financial
        operations—the layer that everything else runs on top of. If the kernel is fragile, payments
        get delayed, reconciliation fails, auditors find gaps, and operators spend their time
        firefighting instead of managing cash. If the kernel is sound, everything above it—AP
        automation, collections, disbursements—becomes a well-defined module with clear invariants.
      </p>

      <h2 id="the-point-solution-trap">The point solution trap</h2>
      <p>
        Every treasury team I have spoken with has a stack of tools that do not talk to each other: a
        cash dashboard from the bank, a spreadsheet that tracks approvals, a separate portal for wire
        initiation, an email chain for sign-offs, a different tool for reconciliation at month end.
        This fragmented approach creates blind spots. The dashboard says cash is fine, but the
        spreadsheet shows a pending approval that would drain the account. The reconciliation tool
        says everything ties, but the manual adjustments logged in email contradict it.
      </p>
      <p>
        The point solution trap is seductive because each tool solves one piece well. The problem is
        that treasury is not a collection of pieces—it is a system where the gaps between tools are
        where failures happen. A payment is approved in the email chain but never initiated in the
        portal. A reconciliation exception is noted in the spreadsheet but never escalated. A forecast
        is built on data that was stale three days ago. The tools are fine. The architecture is
        broken.
      </p>

      <h2 id="vaultas-platform-approach">Vaulta's platform approach</h2>
      <p>
        Instead of building another dashboard, Vaulta starts with the operational layer. Multi-
        currency ledgers that know the difference between a dollar in a US entity and a dollar in a
        Nigerian entity—because to an operator, that difference matters more than the exchange rate.
        Approval workflows that model real authority: who can initiate, who can approve, what
        thresholds trigger additional review, and how escalations happen when time is critical.
        Entity boundaries that prevent one subsidiary's cash from being visible to another unless the
        model says it should be. Audit trails that record every action, every state transition, every
        override.
      </p>
      <p>
        The UI is a surface on top of a system designed for integrity. Operators interact with
        dashboards, forms, and notifications. But underneath, every click resolves to a ledger
        transaction, an authorization event, or a state machine transition. The surface can change—it
        can be a web app, a CLI, an API, a bank integration—but the kernel stays the same. That is
        what makes Vaulta a platform and not a point solution: the operational layer is the product,
        and the interface is how operators touch it.
      </p>

      <h2 id="ledger-design-as-architecture">Ledger design as architecture</h2>
      <p>
        How the ledger is designed determines what the platform can and cannot do. Double-entry is not
        an accounting convention—it is a constraint that prevents money from appearing or disappearing
        without a corresponding movement. Every debit has a credit. Every transaction has a source and
        a destination. Every balance is a consequence of entries, not a stored value that can drift.
      </p>
      <p>
        Idempotent transactions mean operators can retry a failed payment submission without double-
        spending. Immutable history means auditors can trust that what they see is what happened, not
        what was amended after the fact. Tenant-aware balances mean entities can share infrastructure
        without sharing cash. These are not accounting details—they are architectural decisions that
        compound. A ledger built this way can support approval workflows, reconciliation, forecasting,
        and compliance as natural consequences of the data model. A ledger built without these
        decisions requires workarounds that erode trust with every new feature.
      </p>

      <h2 id="what-operators-actually-need">What operators actually need</h2>
      <p>
        Operators do not need more data. They are drowning in data: bank statements, spreadsheets,
        emails, dashboards, alerts. What they need is less noise, clearer authority, and systems that
        respect how treasury work actually happens. Approvals that cannot be bypassed because someone
        is on vacation—the system should route to the backup, not leave the payment in limbo.
        Reconciliation that tells you what is missing, not just that something is wrong—a mismatch is
        only useful if you know which side to trust. Reports that auditors accept without a fight—
        exports that match the format regulators expect, with the traceability that makes a sign-off
        defensible.
      </p>
      <p>
        These are not feature requests. They are architectural requirements. They determine whether
        the platform is used daily or bypassed weekly. The operators I talk to do not switch tools
        because they want something shinier. They switch because their current tool cannot handle a
        multi-entity approval, or does not reconcile across currencies, or generates auditor pushback
        every quarter. Vaulta is built to solve those failures—not by adding more features on the
        surface, but by designing the kernel to handle them natively.
      </p>

      <h2 id="from-treasury-to-platform">From treasury to platform</h2>
      <p>
        The roadmap goes beyond treasury into broader financial operations. The same ledger core that
        handles approvals and reconciliation can handle disbursements—moving money out with the same
        authorization and audit guarantees. It can handle collections—bringing money in with
        reconciliation that closes the loop from invoice to settlement. It can handle financial
        control across entities—setting limits, enforcing policies, and alerting when positions drift
        outside boundaries.
      </p>
      <p>
        This is not scope creep. It is the logical consequence of building the operational layer
        first. Once the ledger is honest, the approval chains are clear, and the entity boundaries
        are drawn, adding a new financial workflow is a matter of composing primitives, not
        reinventing the kernel. The same architecture that makes treasury reliable makes
        disbursements reliable, makes collections reliable, makes cross-entity control reliable.
      </p>
      <p>
        Vaulta is a platform because it started with the layer that everything else needs: trust in
        the numbers, clarity in the authority, and a record that survives scrutiny. That layer does
        not change when the workflow changes. It compounds. And that is why treasury is not a use
        case for Vaulta—it is the operating system that Vaulta is built to be.
      </p>
    </article>
  );
}
