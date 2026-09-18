---
layout: paper
title: "Balancedness of Normal Bundles of Rational Curves in Grassmannians"
title_ja: "Grassmann多様体内の有理曲線のnormal bundleのbalancedness"
authors: "An Cao"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In projective space $\mathbb{P}^r$, the normal bundle of a general rational curve of any degree $d \geq r$ is balanced except over fields of characteristic 2. In arXiv:2404.08102, Coskun, Larson, and Vogt found counterexamples to the naive generalization of this statement to general rational curves in Grassmannians and proposed a conjecture for when the normal bundle is balanced. In this paper, we prove their conjecture for the Grassmannians $G(2, 4)$, $G(2, 5)$, and $G(2, 6)$.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - positivity
arxiv_id: "2609.19381v1"
arxiv_url: "https://arxiv.org/abs/2609.19381"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  Grassmann多様体内の一般の非退化有理曲線について、normal bundleがbalancedにならない数値的例外を分類するCoskun–Larson–Vogt予想を $G(2,4)$、$G(2,5)$、$G(2,6)$ で証明する。退化、接束のsplitting、標数2に由来する既知の障害以外に例外がないことを確定する。
abstract_en: ""
summary_en: >-
  The paper studies when the normal bundle of a general rational curve in a Grassmannian is balanced. A previous conjecture identifies three sources of failure: degeneracy into a smaller Grassmannian, arithmetic constraints visible in the tangent-bundle splitting, and a characteristic-two obstruction. The conjecture is proved for the Grassmannians $G(2,4)$ and $G(2,6)$ in characteristic zero and for $G(2,5)$ in every characteristic.
abstract_ja: >-
  射影空間で知られる一般有理曲線のnormal bundleのbalancednessは、Grassmann多様体にはそのまま拡張できない。本論文は既知の反例を整理した数値条件がすべての例外を与えるという予想を、$G(2,4)$、$G(2,5)$、$G(2,6)$ について証明する。
abstract_source_url: "https://arxiv.org/abs/2609.19381"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.19381](https://arxiv.org/abs/2609.19381)
- **著者:** An Cao
- **初回投稿日・最終更新日:** 2026年9月16日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有理曲線のnormal bundleは曲線の変形を支配する。射影空間では一般有理曲線のnormal bundleの直線束へのsplittingの次数が互いに高々1しか違わないbalanced性が知られるが、Grassmann多様体では単純な類似命題に反例がある。

Coskun–Larson–Vogtは非balanced性の原因を三種類に整理した。曲線がより小さいGrassmann多様体に入る退化、tautological subbundleとquotient bundleのsplittingから生じる数値条件、標数2のFrobeniusに由来する障害である。

本論文は、これらが唯一の例外であるという予想を低いrankの三つのGrassmann多様体で証明する。$G(2,4)$ と $G(2,6)$ では標数0、$G(2,5)$ では任意標数を扱う。

## 背景と問題設定

曲線 $C\subset G(k,n)$ 上でtautological bundleを $S$、quotient bundleを $Q$ とすると

$$
T_{G(k,n)}\simeq S^*\otimes Q,
\qquad
N_{C/G(k,n)}\simeq T_{G(k,n)}|_C/T_C
$$

である。$d=kq_1+r_1=(n-k)q_2+r_2$ とEuclid除法し、$S^*|_C$ と $Q|_C$ の一般的splittingを代入すると、接束のsummandの次数差が2になる場合が現れ、normal bundleのbalancednessを妨げる。

## 主結果

### Coskun–Larson–Vogt予想の低rankの場合（Theorem 1.2）

一般の非退化次数 $d$ の有理曲線に対するConjecture 1.1は、$G(2,4)$ と $G(2,6)$ では標数0で、$G(2,5)$ では任意標数で成り立つ。すなわちIntroductionに列挙された次の場合だけが非balancedとなる。

1. $d$ の範囲により曲線がより小さいGrassmann多様体へ退化する場合。
2. $r_1r_2\ne0$ かつ
   $$
   q_1+q_2\leq(k-r_1)(n-k-r_2)
   $$
   となる接束splitting由来の場合。
3. 標数2で $k=1$ または $k=n-1$ かつ $d\not\equiv1\pmod{n-2}$ の場合。

定理の標数に関する範囲はGrassmann多様体ごとに異なり、$G(2,4)$ と $G(2,6)$ について任意標数を主張してはいない。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.19381](https://arxiv.org/abs/2609.19381)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Conjecture 1.1; Theorem 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
