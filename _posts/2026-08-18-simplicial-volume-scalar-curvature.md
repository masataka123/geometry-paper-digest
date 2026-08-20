---
layout: paper
title: "Simplicial Volume and Scalar Curvature on Closed Kähler Surfaces"
title_ja: "閉Kähler曲面の単体体積とスカラー曲率"
authors: "Jie Min, Fangyang Zheng, Bo Zhu"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.GT
  - math.SG
arxiv_abstract: >-
  Let $M$ be a closed Kähler surface. We prove that every Riemannian metric $g$ on $M$ with
  $\operatorname{Sc}_g\geq-\lambda^2$, where $\lambda\geq 0$, satisfies $$ \lVert M\rVert\leq
  \frac{27}{2}\,\lambda^4\operatorname{vol}_g(M). $$ This proves Gromov's quantitative
  scalar-curvature--simplicial-volume conjecture for closed Kähler surfaces. We also construct
  infinitely many non-Kähler symplectic 4-manifolds of general type with positive simplicial
  volume for which the same estimate holds.
topic: differential-geometry
tags:
  - positivity
  - kahler-einstein-metrics
  - curvature
arxiv_id: "2608.17335v1"
arxiv_url: "https://arxiv.org/abs/2608.17335"
arxiv_submitted: "2026-08-18"
arxiv_updated: "2026-08-18"
summary: >-
  閉Kähler曲面では、任意のRiemann計量のスカラー曲率の負部分が単体体積を一様に支配することを示し、Gromovの定量的予想を係数 $27/2$ で解決する。
  証明はYamabe不変量、曲面分類、nef標準束に近づく捩れ負Kähler–Einstein計量を結び、さらに同じ評価を満たす非Kählerシンプレクティック4次元多様体の無限族も与える。
abstract_en: ""
summary_en: >-
  The authors establish a uniform link between simplicial volume and the negative part of scalar
  curvature on every closed Kähler surface. Their estimate implies Gromov's quantitative
  scalar-curvature conjecture in this setting, including for blow-ups. The argument converts the
  metric question into a Yamabe-invariant bound and then uses the classification of Kähler surfaces
  together with metrics associated to nef canonical classes. The paper also supplies infinitely
  many non-Kähler symplectic four-manifolds of general type that obey the same bound.
abstract_ja: >-
  閉Kähler曲面 $M$ の任意のRiemann計量 $g$ に対し、スカラー曲率が
  $\operatorname{Sc}_g\geq-\lambda^2$ を満たすなら、単体体積は
  $\lVert M\rVert\leq(27/2)\lambda^4\operatorname{vol}_g(M)$ と評価される。これにより、このクラスについてGromovのスカラー曲率と単体体積を結ぶ定量的予想が証明される。また、単体体積が正で同じ評価を満たす一般型の非Kählerシンプレクティック4次元多様体も無限に構成される。
abstract_source_url: "https://arxiv.org/abs/2608.17335"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.17335](https://arxiv.org/abs/2608.17335)
- **著者:** Jie Min, Fangyang Zheng, Bo Zhu
- **初回投稿日:** 2026年8月18日
- **最終更新日:** 2026年8月18日（v1）
- **主分類・副分類:** math.DG（主分類）、math.GT、math.SG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

単体体積 $\lVert M\rVert$ は閉向き付け多様体の基本類の $\ell^1$ 半ノルムであり、ホモトピー同値で不変な大域的位相量である。Gromovは、スカラー曲率の下限とRiemann体積から単体体積を次元だけに依存する定数で評価できると予想した。本論文は閉Kähler曲面に対してこの定量的予想を証明する。

得られるのは、特定のKähler計量だけを対象とする評価ではない。閉Kähler曲面の基礎となる滑らかな4次元多様体上の**任意の**Riemann計量 $g$ について、スカラー曲率の負部分の $L^2$ 量が単体体積を支配する。特に一様な下限 $\operatorname{Sc}_g\geq-\lambda^2$ を代入すれば、予想された体積評価が係数 $27/2$ で従う。

この係数はすべての閉Kähler曲面とそのblow-upに共通であるが、各多様体ごとの最良定数だとは主張されない。Introductionでは、双円板商とそのblow-upにはより鋭い最適係数が得られることも明記されている。

さらに著者らは、Kähler曲面の範囲を越え、正の単体体積をもち同じ評価が成立する一般型の非Kählerシンプレクティック4次元多様体を無限に構成する。これは全シンプレクティック4次元多様体についての主張ではなく、Kähler曲面に近い位相的性質をもつよう構成された族に対する結果である。

## 背景と問題設定

閉向き付け $n$ 次元多様体 $M$ の単体体積は、実係数基本類を表す特異chain $c=\sum_i a_i\sigma_i$ に対する $\lVert c\rVert_1=\sum_i|a_i|$ の下限として定義される。Gromovの予想（Conjecture 1.1）は、次元だけに依存する $c_n\geq0$ があり、$\operatorname{Sc}_g\geq-\lambda^2$ なら

$$
\lVert M\rVert\leq c_n\lambda^n\operatorname{vol}_g(M)
$$

となる、というものである。$\lambda=0$ の場合には、非負スカラー曲率をもつ閉多様体の単体体積が消えることを含む。

論文は計量ごとの条件をYamabe不変量 $\sigma(M)$ による位相・滑らか構造側の量へ移す。スカラー曲率の負部分を $\operatorname{Sc}_g^-:=\max\{-\operatorname{Sc}_g,0\}$ とし、4次元のscalar costを

$$
A_4(M)=\left|\min\{\sigma(M),0\}\right|^2
=\inf_g\int_M(\operatorname{Sc}_g^-)^2\,d\operatorname{vol}_g
$$

と表すことで、問題を $\lVert M\rVert\leq(27/2)A_4(M)$ へ還元する。

## 主結果

### 閉Kähler曲面に対する評価（Theorem 1.2）

閉Kähler曲面 $M$ 上の任意のRiemann計量 $g$ に対して

$$
\lVert M\rVert\leq\frac{27}{2}
\int_M(\operatorname{Sc}_g^-)^2\,d\operatorname{vol}_g
$$

が成立する。したがって $\lambda\geq0$ について $\operatorname{Sc}_g\geq-\lambda^2$ なら

$$
\lVert M\rVert\leq\frac{27}{2}\lambda^4\operatorname{vol}_g(M)
$$

である。Kählerという仮定は $M$ の複素曲面構造に課され、評価を受ける $g$ 自体がKähler計量である必要はない点が重要である。

### 非Kählerシンプレクティック4次元多様体への適用

Introductionでは、一般型の非Kählerシンプレクティック4次元多様体で、単体体積が正かつ上と同じ評価を満たすものを無限に構成すると述べる。ここではLeBrunのYamabe不変量の完全な公式の代わりにmonopole classによる評価を用い、Kählerの場合の評価と組み合わせる。

## 証明の見取り図

まずYamabe問題の解を使い、スカラー曲率の負部分の $L^2$ 下限を $A_4(M)=|\min\{\sigma(M),0\}|^2$ と同定する。これにより、すべての計量を直接比較する課題が、計量に依存しないscalar costと単体体積との比較へ置き換わる。

$M$ が一般型でなければ、Paternain–Peteanのcollapse定理とGromovのRicci曲率評価から $\lVert M\rVert=0$ が従う。一般型なら極小model $S$ に移り、blow-upに対する単体体積の不変性とLeBrunの公式により

$$
\lVert M\rVert=\lVert S\rVert,
\qquad A_4(M)=32\pi^2c_1^2(S)
$$

を得る。

次に、$S$ の標準束がnefであることを用いる。標準類へ近づくKähler類上で複素Monge–Ampère方程式を解き、捩れ負Kähler–Einstein計量を構成してRicci曲率の下限を確保する。GromovのRicci曲率評価を適用すると

$$
\lVert S\rVert\leq432\pi^2c_1^2(S)
$$

となり、上のscalar costの公式との比較から係数 $432/32=27/2$ が現れる。この流れはIntroductionに示された証明概略であり、本記事は後続節の個々の証明を検証・再構成するものではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.17335](https://arxiv.org/abs/2608.17335)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Conjecture 1.1、Theorem 1.2、Propositions 2.3、3.2、4.2、4.3、5.1
- **論文構成の説明:** pp. 2–3（Outline of the proof）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
