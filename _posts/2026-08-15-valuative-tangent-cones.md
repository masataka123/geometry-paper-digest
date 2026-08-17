---
layout: paper
title: "Optimal algebraic tangent cone of torsion-free sheaves via valuations"
title_ja: "付値による捩れなし層の最適代数的接錐"
authors: "Yohei Hada"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  We develop a valuation-theoretic framework for studying tangent cones of torsion-free sheaves on
  algebraic varieties. To analyze these objects, we introduce a slope stability theory, including the
  Harder-Narasimhan filtrations, for finitely generated $\mathbb{R}$-graded modules over finitely
  generated $\mathbb{R}_{\geq 0}$-graded algebras. Using it, we show that there is a canonically
  determined tangent cone of torsion-free sheaves, up to the expected equivalence ambiguity, for
  quasi-regular valuations, which generalize Chen-Sun [3].
topic: algebraic-geometry
tags:
  - singularities
  - vector-bundles-sheaves
  - stability
arxiv_id: "2602.01112v1"
arxiv_url: "https://arxiv.org/abs/2602.01112v1"
arxiv_submitted: "2026-02-01"
arxiv_updated: "2026-02-01"
summary: >-
  捩れなし層の代数的接錐を、滑らかな点のblow-up付値から準正則付値へ拡張する。
  実数次数付き加群の斜率安定性とHarder–Narasimhan filtrationを構成し、最適延長の存在と本質的一意性を示す。
abstract_en: ""
summary_en: >-
  The paper builds a valuation-based theory of algebraic tangent cones for torsion-free sheaves. It first develops slope stability and Harder–Narasimhan filtrations for finitely generated real-graded modules. For a quasi-regular valuation, a torsion-free module then has an optimal equivariant extension whose slope spread is strictly smaller than the valuation index. Its associated Harder–Narasimhan graded object is canonical up to shifts of the summand gradings.
abstract_ja: >-
  代数多様体上の捩れなし層の接錐を扱うため、有限生成実数次数付き代数上の有限生成実数次数付き加群に斜率安定性とHarder–Narasimhan filtrationを構成する。この理論を準正則付値に沿う同変退化へ適用し、最大斜率と最小斜率の差が付値の指数より小さい最適延長が存在すること、およびそのHarder–Narasimhan次数付き加群が次数移動を除いて一意であることを示す。
abstract_source_url: "https://arxiv.org/abs/2602.01112v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2602.01112v1](https://arxiv.org/abs/2602.01112v1)
- **著者:** Yohei Hada
- **初回投稿日:** 2026年2月1日
- **最終更新日:** 2026年2月1日
- **主分類・副分類:** math.AG（主）、math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Chen–Sunの代数的接錐は、滑らかな点のblow-upの例外因子が定める付値に沿って反射的層を延長し、その制限の不安定性を最小化する。本論文は、この構成を一般の準正則付値へ拡張する。

付値が生む実数次数を扱うため、有限生成$\mathbb R_{\geq0}$-次数付き代数上の有限生成$\mathbb R$-次数付き加群に対して斜率とHarder–Narasimhan filtrationを新たに整備する。

捩れなし加群を付値に付随するRees退化へ同変に延長し、特殊ファイバー上の最大斜率と最小斜率の差が付値の指数より小さい延長の存在を証明する。そのHarder–Narasimhan次数付き加群は、直和因子ごとの次数移動という不可避な曖昧さを除いて一意である。

## 背景と問題設定

反射的層にadmissible HYM接続があると、解析的には原点へのrescalingとUhlenbeckコンパクト性から接錐が得られる。Chen–Sunはblow-up上の延長$\widehat E$に対し

$$
\Phi(\widehat E)=\mu_{\max}(\widehat E|_D)-\mu_{\min}(\widehat E|_D)
$$

を用いて最適な代数的接錐を構成し、解析的接錐との関係を示した。本論文の問いは、blow-up付値を越えて、有限生成付値に沿う延長に標準的なものがあるか、である。

## 主結果

### 最適延長の存在と一意性（Theorem 1.2）

$R$を代数閉体上のアフィン整域、$v$を閉点$x\in\operatorname{Spec}R$に中心をもつ指数$\delta$の準正則付値、すなわち

$$
v(K(R)\setminus\{0\})=\delta\mathbb Z
$$

とする。任意の捩れなし$R$-加群$M$に対し、$\operatorname{Spec}(\operatorname{Rees}_v(R))$上の$\mathbb G_m$-同変延長$\widehat E$で

$$
\Phi(\widehat E|_{X_0})
=\mu_{\max}(\widehat E|_{X_0})-\mu_{\min}(\widehat E|_{X_0})<\delta
$$

を満たすものが存在する。さらに、この不等式を満たす延長のHarder–Narasimhan次数付き加群は、各直和因子のgrading変更を除いて一意である。

この主張は、最適な延長そのものの文字どおりの一意性ではなく、接錐を表す次数付き対象の自然な同値を除いた一意性である点が重要である。

## 証明の見取り図

まず実数次数付き加群のHilbert関数に代わる漸近Riemann–Roch公式を証明し、それから斜率、安定性、Harder–Narasimhan filtrationを構成する。付値のRees代数が与える同変退化上で、Hecke変換に相当する操作により斜率幅$\Phi$を減少させ、$\delta$未満へ到達する。二つの最適延長を比較すると、Harder–Narasimhan因子のgrading shiftだけが残ることから本質的一意性が得られる。

## 原論文との対応
- **Abstractページ:** arXiv Abstract
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.2
- **論文構成の説明:** Introduction末尾, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
