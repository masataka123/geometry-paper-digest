---
layout: paper
title: "Transcendental Numerical Dimension and Rational Quotients in Kähler Geometry"
title_ja: "Kähler幾何における超越的数値次元と有理商"
authors: "Songchen Liu"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DG
arxiv_abstract: >-
  We study properties of the transcendental numerical dimension on compact Kähler manifolds. In particular, we establish a connection between this invariant and degenerate divisors in fibrations, extending few results from the projective setting. We also study fibrations between compact Kähler manifolds with rationally connected general fibre. We prove that every pseudo-effective line bundle contained in a tensor power of the cotangent bundle comes from a pseudo-effective line bundle contained in the corresponding tensor power on the base, up to an explicit relation involving degenerate divisors. Finally, combining these results with a theorem of Cao--Păun, we answer a question they posed on rational quotients. More precisely, let \(q : X\dashrightarrow Q\) be the rational quotient of a compact Kähler manifold \(X\), and let \(L\) be a pseudo-effective line bundle on \(X\) admitting an injection \(L\to(\Omega_X^1)^{\otimes m},~m \geq 1\). We prove that \[ \nu(L,X)\leq\nu(K_Q,Q). \] To the best of our knowledge, both the descent theorem and this inequality are new even in the projective setting.
topic: several-complex-variables
tags:
  - positivity
  - foliations
  - birational-geometry
arxiv_id: "2608.26916v1"
arxiv_url: "https://arxiv.org/abs/2608.26916"
arxiv_submitted: "2026-08-27"
arxiv_updated: "2026-08-27"
summary: >-
  コンパクトKähler多様体の有理商に対し、余接束のテンソル冪へ埋め込まれる擬有効直線束の数値次元を商の標準束で抑える。一般ファイバーの有理連結性を用いた直線束の降下と、退化因子が超越的数値次元を変えないことを結び付け、射影的場合にも新しいとされる不等式を得る。
abstract_en: ""
summary_en: >-
  The paper studies numerical dimension for pseudoeffective classes on compact Kähler manifolds through fibrations with rationally connected general fibre. A line subbundle of a tensor power of the cotangent bundle is related to a line bundle on the base, with the discrepancy measured by effective divisors of a controlled vertical type. The authors then show that these divisors do not alter the relevant numerical dimension. This yields an upper bound governed by the canonical bundle of the rational quotient.
abstract_ja: >-
  コンパクトKähler多様体上の超越的数値次元と、ファイブレーションに現れる退化因子との関係を調べる。一般ファイバーが有理連結な場合、余接束のテンソル冪に含まれる擬有効直線束が、退化因子による明示的なずれを除いて底空間から降下することを示す。これとCao–Păunの定理を合わせ、有理商 $q:X\dashrightarrow Q$ と埋め込み $L\to(\Omega_X^1)^{\otimes m}$ に対して $\nu(L,X)\leq\nu(K_Q,Q)$ を証明する。
abstract_source_url: "https://arxiv.org/abs/2608.26916"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.26916](https://arxiv.org/abs/2608.26916)
- **著者:** Songchen Liu
- **初回投稿日:** 2026年8月27日
- **最終更新日:** 2026年8月27日
- **主分類・副分類:** math.CV（主分類）, math.AG, math.DG
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

非単線織な射影多様体では標準束が擬有効であるという特徴づけが知られ、近年これはコンパクトKähler多様体へ拡張された。Cao–Păunは、$K_X$ が擬有効ならば余接束のテンソル冪へ埋め込まれる擬有効直線束 $L$ が

$$
\nu(L,X)\leq \nu(K_X,X)
$$

を満たすことを導き、単線織の場合には右辺を有理商の標準束で置き換えられるかと問うた。

本論文はこの問いに肯定的に答える。一般ファイバーが有理連結なファイブレーション $f:X\to Q$ と $L\hookrightarrow(\Omega_X^1)^{\otimes m}$ に対し、$K_Q$ が擬有効ならば

$$
\nu(L,X)\leq\nu(K_Q,Q)
$$

が成り立つ。特に有理商へ適用すれば、底は非単線織なので必要な擬有効性が従う。

鍵は、$L$ を底上の直線束へ降下させる際の誤差を「$f$-退化因子」で記述することにある。もう一つの主結果は、そのような有効因子を底の擬有効類の引き戻しへ足しても数値次元が増えないことを示す。この二段階により、微分形式の幾何と超越的交叉理論を結び付ける。

## 背景と問題設定

有理商 $q:X\dashrightarrow Q$ は一般ファイバーが有理連結で、底が非単線織となるように $X$ を分解する。問題は、$X$ 上の余接テンソルに含まれる擬有効直線束の正値性が、有理曲線方向を除いた底 $Q$ の正値性によってどこまで制御されるかである。

有効な垂直 $\mathbb R$-因子 $D$ が $f$-退化であるとは、$f(\operatorname{Supp}D)$ に含まれる底の任意の素因子 $P$ に対し、$P$ を支配するが $\operatorname{Supp}D$ には含まれない素因子が $X$ 上に存在することをいう。この条件は、像の余次元が2以上である因子を含む自然な一般化である。

## 主結果

### 有理商の数値次元不等式（Theorem 1.2）

連結なコンパクトKähler多様体間のファイブレーション $f:X\to Q$ の一般ファイバーが有理連結で、$K_Q$ が擬有効であるとする。擬有効直線束 $L$ がある $m\geq1$ について $(\Omega_X^1)^{\otimes m}$ へ埋め込まれるならば、

$$
\nu(L,X)\leq\nu(K_Q,Q)
$$

が成り立つ。有理商の不定性を解消してこの定理を適用し、数値次元の固有双有理写像に関する不変性を使うことで、Cao–Păunの問いへの答えを得る。

### 退化因子の数値次元（Theorem 1.3）

$f:X\to Y$、底上の擬有効類 $\alpha$、有効な $f$-退化 $\mathbb R$-因子 $D$ に対して

$$
\nu(f^*\alpha+\{D\},X)=\nu(\alpha,Y)
$$

が成り立つ。すなわち、退化因子の見かけの有効性は超越的数値次元を増加させない。

### 余接テンソル中の直線束の降下（Theorem 1.4）

一般ファイバーが有理連結である $f:X\to Y$ と $L\hookrightarrow(\Omega_X^1)^{\otimes m}$ に対し、$(\Omega_Y^1)^{\otimes m}$ の飽和階数1部分層となる擬有効直線束 $M$ と、有効因子 $D,E$ が存在し、$D$ は $f$-退化で

$$
L\otimes\mathcal O_X(E)\simeq f^*M\otimes\mathcal O_X(D)
$$

を満たす。この等式が、$X$ 上の $L$ と底上の $M$ の数値次元を比較する橋渡しとなる。

## 証明の見取り図

降下定理では、一般ファイバーを覆う非常に自由な有理曲線へ埋め込みを制限し、その像が底の余接テンソルの引き戻しに一般的に含まれることを示す。得られる射影束への有理写像は一般ファイバー上で定数となり、底を経由して因子化する。これから $M$ を構成し、引き戻しと $L$ の差を有効因子 $D,E$ として記録する。

一方、退化因子についてはBoucksomの因子的Zariski分解を用い、$D$ を加えても正部分が変わらないことを示す。数値次元は負部分を除いても変わらないためTheorem 1.3が従い、降下等式とCao–Păunの擬有効性定理を組み合わせてTheorem 1.2へ至る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.26916](https://arxiv.org/abs/2608.26916)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3, 1.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
