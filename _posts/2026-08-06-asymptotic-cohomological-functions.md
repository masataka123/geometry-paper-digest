---
layout: paper
title: "Asymptotic Cohomological Functions and Volumes on Proper Schemes"
title_ja: "固有スキーム上の漸近コホモロジー関数と体積"
authors: "Wenqi Li"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
arxiv_id: "2607.09021v1"
arxiv_url: "https://arxiv.org/abs/2607.09021v1"
arxiv_submitted: "2026-07-10"
arxiv_updated: "2026-07-10"
summary: >-
  任意の体上の固有スキームについて、直線束の体積を定義する上極限が常に真の極限になることを証明する。さらに、有界導来圏の対象で摂動した漸近コホモロジーの増大率を、被約部分スキーム上の漸近コホモロジー関数とコホモロジー層の階数で表す。
abstract_en: ""
summary_en: >-
  This paper studies leading-order cohomological growth for tensor powers of a line bundle on an arbitrary proper scheme over a field. It establishes a perturbation formula for tensoring with a bounded complex, expressing the result through generic ranks of its cohomology sheaves and asymptotic functions on the reduced scheme. The method separates nilpotent structure from the reduced geometry and also handles reducible schemes. As a consequence, the volume of every line bundle on every proper scheme is shown to be an actual limit rather than merely a limsup.
abstract_ja: >-
  体上の固有スキームにおける漸近コホモロジー関数を研究する。有界導来圏の対象による摂動の下での関数の振る舞いを記述する公式を証明し、同じ方法によって任意の固有スキーム上の直線束の体積が上極限ではなく極限として常に存在することを示す。
abstract_source_url: "https://arxiv.org/abs/2607.09021v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.09021v1](https://arxiv.org/abs/2607.09021v1)
- **著者:** Wenqi Li
- **初回投稿日:** 2026年7月10日
- **最終更新日:** 2026年7月10日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$d$次元固有スキーム$X$上の直線束$L$の体積は、$H^0(X,L^{\otimes m})$の主要な増大率を測る。定義には一般に$\limsup$を使うため、それが通常の極限になるかという問題が生じる。滑らかな多様体や生成的に被約なスキームなどでは既知だったが、非被約構造を任意に許す場合が残っていた。

本論文は、任意の体上の任意の固有スキームで直線束の体積が極限として存在すると証明する。一般の次数の漸近コホモロジー関数についても、$X$上での極限問題を被約部分スキーム$X_{\mathrm{red}}$上の問題へ帰着する。

中心的な道具は、 coherent sheafだけでなく$D^b_{\mathrm{Coh}}(\mathcal O_X)$の有界複体による摂動を扱う公式である。最高次の漸近増大には複体の各コホモロジー層のgeneric rankだけが寄与し、低次元支持の差は正規化後に消える。

体積については被約スキーム上での既知の極限存在とこの帰着を組み合わせる。一方、高次コホモロジーの$\limsup$対極限問題そのものをすべて解くのではなく、被約の場合へ還元するのがIntroductionで述べられた範囲である。

## 背景と問題設定

$X$を$d$次元固有スキーム、$L$を直線束とすると、体積と高次漸近コホモロジー関数は

$$
\operatorname{vol}_X(L)=\limsup_{m\to\infty}
\frac{\dim H^0(X,L^{\otimes m})}{m^d/d!},
$$

$$
\widehat h^i(X,L)=\limsup_{m\to\infty}
\frac{\dim H^i(X,L^{\otimes m})}{m^d/d!}
$$

で定義される。非被約スキームでは一般のgraded linear seriesの極限が存在しない例もあるため、直線束の全切断環に由来する体積の極限存在は自明ではない。

## 主結果

### 体積の極限存在（Theorem 1.1）

任意の体$k$上の固有スキーム$X$と直線束$L$に対して、$\operatorname{vol}_X(L)$を定義する$\limsup$は通常の極限として存在する。したがって、非被約・非既約の場合を含めても、直線束の体積には振動による不定性がない。

### 有界複体による摂動公式（Theorem 1.2）

$X$を$d$次元既約固有スキーム、$L$を直線束、$F^\bullet\in D^b_{\mathrm{Coh}}(\mathcal O_X)$とする。このとき

$$
\limsup_{m\to\infty}
\frac{h^i(X,F^\bullet\otimes L^{\otimes m})}{m^d/d!}
=
\sum_{s+t=i}\operatorname{rank}\mathcal H^t(F^\bullet)\,
\widehat h^s(X_{\mathrm{red}},L_{\mathrm{red}}).
$$

coherent sheafに対する既知の「階数倍」公式を導来圏の対象へ広げ、さらに非被約構造の寄与を被約部分上の量によって記述する。Introductionでは、可約な$X$に対する対応する公式もTheorem 3.8として得ると説明される。

## 証明の見取り図

まず有界複体のコホモロジーを与えるスペクトル系列を使い、低次元に支持をもつ複体の寄与が$O(m^{d-1})$であることを示す。$m^d/d!$で正規化すればこの誤差は消えるため、生成点近傍での導来同型だけが主要項を決める。

次に非被約既約スキームをその被約部分と比較する。標数0と正標数を分けて摂動公式を証明し、最後に既約成分ごとの公式へ拡張する。これを次数0に適用し、被約スキームでの体積の極限存在と合わせることで一般の固有スキームに対するTheorem 1.1を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.09021v1](https://arxiv.org/abs/2607.09021v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 3.8, 4.1, 4.2
- **論文構成の説明:** Introduction末尾, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
