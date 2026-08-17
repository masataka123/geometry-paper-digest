---
layout: paper
title: "A slope-unstable bundle on a surface with 1-homogeneous projectivization"
title_ja: "射影化が1斉次となる曲面上の傾き不安定ベクトル束"
authors: "Jihao Liu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We answer affirmatively a question of Fulger and Langer on the interplay between slope semistability
  and positivity for projective bundles with vanishing discriminant. The main result of this paper was
  obtained by Chatgpt 5.5 pro, and the Danus system based on the Rethlas system.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
arxiv_id: "2607.04376v2"
arxiv_url: "https://arxiv.org/abs/2607.04376"
arxiv_submitted: "2026-07-05"
arxiv_updated: "2026-08-06"
summary: >-
  射影束のネフ錐と擬有効錐が一致することから元の束の傾き半安定性を導けるか、という問題に明示的な反例を与える。$\mathbb P^2$ 上の $E=T_{\mathbb P^2}(-1)\oplus\mathcal O_{\mathbb P^2}$ は傾き不安定だが、$\mathbb P(E)$ は1斉次であり、Fulger–Langer の問いに肯定的に答える。
abstract_en: ""
summary_en: >-
  The paper constructs an explicit rank-three vector bundle on the complex projective plane whose slope behavior is unstable although its projectivization has identical nef and pseudo-effective cones. The destabilizing summand is read directly from the twisted tangent bundle. A two-ray argument on the projective bundle establishes the cone equality. This supplies the surface example requested by Fulger and Langer.
abstract_ja: >-
  複素射影平面上に、傾き不安定であるにもかかわらず射影化が1斉次となるベクトル束を構成する。これは、判別式が消える射影束について傾き半安定性と正値性の関係を問う Fulger–Langer の問題に答えるものである。具体例では接束の捩りと自明束の直和を用い、傾きの計算と二つの境界射線による錐の議論を組み合わせる。
abstract_source_url: "https://arxiv.org/abs/2607.04376"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.04376v2](https://arxiv.org/abs/2607.04376)
- **著者:** Jihao Liu
- **初回投稿日:** 2026年7月5日
- **最終更新日:** 2026年8月6日
- **主分類・副分類:** math.AG（副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体 $Y$ が **1斉次** であるとは、数値的因子類の空間でネフ錐と擬有効錐が一致すること、すなわち

$$
\operatorname{Nef}(Y)=\overline{\operatorname{Eff}}(Y)
$$

をいう。Fulger–Langer は、判別式が数値的に消える強傾き半安定束 $E$ では、底空間と $\mathbb P(E)$ の1斉次性が対応することを示した。一方、半安定性を外したとき、曲面上でも傾き不安定な束の射影化が1斉次になり得るかは未解決だった。

論文は $X=\mathbb P^2_{\mathbb C}$ とし、双対ではなく一次元商をパラメータ化する規約の下で

$$
E=T_{\mathbb P^2}(-1)\oplus\mathcal O_{\mathbb P^2}
$$

を取る。これは階数3の傾き不安定束だが、四次元多様体 $\mathbb P_X(E)$ のネフ錐と擬有効錐は一致する。したがって、求められていた曲面上の例が得られる。

結論の要点は、束の不安定性と射影化の因子錐の形を独立な二つの初等的計算で確かめることにある。Introduction は、主結果の着想が自動化システムにより得られ、その後に検証と人手による整備が行われたとも明記している。本記事は数学的主張を原論文の Introduction に沿って紹介するもので、証明を独立に検証したものではない。

## 背景と問題設定

偏極 $(X,H)$ 上の束 $G$ の傾きは

$$
\mu_H(G)=\frac{c_1(G)\cdot H^{\dim X-1}}{\operatorname{rank}(G)}
$$

である。$E$ が傾き不安定とは、$0\neq F\subsetneq E$ で $\mu_H(F)>\mu_H(E)$ となる部分束が存在することをいう。先行結果は強傾き半安定性と $\Delta(E)\equiv0$ の下で1斉次性を制御していたため、半安定性が本質的かどうかが問題となる。

## 主結果

### 主定理（Theorem 1.3）

$X=\mathbb P^2_{\mathbb C}$、$H=c_1(\mathcal O_{\mathbb P^2}(1))$ とする。このとき

$$
E=T_{\mathbb P^2}(-1)\oplus\mathcal O_{\mathbb P^2}
$$

は $H$ に関して傾き不安定である一方、$\mathbb P(E)$ は1斉次である。より具体的には、$F=T_{\mathbb P^2}(-1)$ に対して

$$
\mu_H(F)=\frac12>\frac13=\mu_H(E)
$$

となり、直和因子 $F$ が $E$ を不安定化する。この明示例により Fulger–Langer の Question 2(2) は肯定的に解決される。

## 証明の見取り図

捩った Euler 完全列から $F$ は階数2、$c_1(F)=H$ と分かり、上の傾き計算を得る。射影束 $Y=\mathbb P_X(E)$ では

$$
A=\pi^*H,\qquad B=c_1(\mathcal O_Y(1))
$$

が $N^1(Y)_{\mathbb R}$ を張る。$A$ は底からの引き戻し、$B$ は $E$ の大域生成性から得られる $Y\to\mathbb P^3$ の超平面類の引き戻しなので、ともにネフである。また $A^4=B^4=0$ で、ともにビッグでない。二次元の因子類空間で独立な二つの境界射線が擬有効錐を決めるため、

$$
\operatorname{Nef}(Y)=\overline{\operatorname{Eff}}(Y)
=\mathbb R_{\ge0}A+\mathbb R_{\ge0}B
$$

が従う、というのが Introduction の説明する論理である。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.04376](https://arxiv.org/abs/2607.04376)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.3
- **論文構成の説明:** Outline of the argument, p. 2
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
