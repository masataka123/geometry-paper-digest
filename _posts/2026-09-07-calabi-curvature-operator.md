---
layout: paper
title: "K{ä}hler Einstein manifolds and the Calabi curvature operator"
title_ja: "Kähler--Einstein多様体とCalabi曲率作用素"
authors: "Zhi-Lin Dai, Hai-Ping Fu, Yao Lu"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we study the Calabi curvature operator on K{ä}hler manifolds. First, we prove that if the Calabi curvature operator on K{ä}hler manifolds satisfies $\frac{n\left(n + 1\right)}{2}$-positive (nonnegative), $\frac{n + 1}{2}$-positive (nonnegative), and $\left( n-1 \right)$-positive (nonnegative), then the scalar curvature, Ricci curvature, and orthogonal Ricci curvature are positive (nonnegative), respectively. Second, we show that any compact K{ä}hler Einstein manifold satisfying the condition $$λ_1+\dots+λ_α\ge -αθ(n,α)\barλ,\; α\le \frac{n}{2}$$ must have nonnegative constant holomorphic sectional curvature.
topic: differential-geometry
tags:
  - curvature
  - kahler-einstein-metrics
arxiv_id: "2609.05106v1"
arxiv_url: "https://arxiv.org/abs/2609.05106"
arxiv_submitted: "2026-09-04"
arxiv_updated: "2026-09-04"
summary: >-
  Kähler多様体のCalabi曲率作用素について、低い固有値の和の正値性からスカラー曲率、Ricci曲率、直交Ricci曲率の正値性を導く。さらにコンパクトKähler--Einstein多様体では、明示的な固有値和の下界から正則断面曲率が非負の定数となる剛性を証明する。
abstract_en: >-
  In this paper, we study the Calabi curvature operator on K{ä}hler manifolds. First, we prove that if the Calabi curvature operator on K{ä}hler manifolds satisfies $\frac{n\left(n + 1\right)}{2}$-positive (nonnegative), $\frac{n + 1}{2}$-positive (nonnegative), and $\left( n-1 \right)$-positive (nonnegative), then the scalar curvature, Ricci curvature, and orthogonal Ricci curvature are positive (nonnegative), respectively. Second, we show that any compact K{ä}hler Einstein manifold satisfying the condition $$λ_1+\dots+λ_α\ge -αθ(n,α)\barλ,\; α\le \frac{n}{2}$$ must have nonnegative constant holomorphic sectional curvature.
summary_en: ""
abstract_ja: >-
  Kähler多様体上のCalabi曲率作用素を研究する。この作用素がそれぞれ $\frac{n(n+1)}2$-正、$\frac{n+1}2$-正、$(n-1)$-正であるとき、スカラー曲率、Ricci曲率、直交Ricci曲率が正となり、非負版も成り立つ。さらにコンパクトKähler--Einstein多様体が、最小固有値からの和に関する指定された下界を満たすならば、正則断面曲率は非負の定数となる。
abstract_source_url: "https://arxiv.org/abs/2609.05106"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.05106](https://arxiv.org/abs/2609.05106)
- **著者:** Zhi-Lin Dai, Hai-Ping Fu, Yao Lu
- **初回投稿日:** 2026年9月4日
- **最終更新日:** 2026年9月4日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler多様体には通常の曲率作用素やKähler曲率作用素に加え、対称な $(1,0)$-テンソル上に作用するCalabi曲率作用素がある。本論文は、その固有値の部分和が多様体のスカラー曲率、Ricci曲率、直交Ricci曲率をどの程度統制するかを調べる。

第一の結果は、Calabi作用素の $\alpha$-正値性から各種曲率の正値性を引き出す閾値を与える。とくに $\frac{n+1}{2}$-正値性から正Ricci曲率が従うため、Bochnerの定理を通じて正則形式の消滅も得られる。

第二の結果はコンパクトKähler--Einstein多様体に対する剛性である。Calabi作用素の小さい方からの固有値和が、平均固有値に依存する明示的な下界を満たせば、正則断面曲率が非負の定数になる。従来の正Calabi作用素という仮定より弱く、一定範囲の負の固有値を許す点が特徴である。

## 背景と問題設定

複素次元 $n$ のKähler多様体 $(M,g,J)$ で、Calabi曲率作用素は $\odot^2V^{1,0}$ 上の作用素

$$
\mathcal C(Z_A\odot Z_B)=\sum_{C,D=1}^n R_{A\bar C\bar D B}Z_C\odot Z_D
$$

として定義される。その固有値を昇順に $\lambda_1\leq\cdots\leq\lambda_N$、$N=\frac{n(n+1)}2$ とし、非整数 $\alpha>0$ に対しても

$$
\lambda_1+\cdots+\lambda_\alpha
=\lambda_1+\cdots+\lambda_{[\alpha]}+(\alpha-[\alpha])\lambda_{[\alpha]+1}
$$

と定める。この和が各点で正または非負であることを、$\alpha$-正または $\alpha$-非負と呼ぶ。

## 主結果

### 曲率の正値性（Theorem 1.1）

複素次元 $n$ のKähler多様体について、Calabi作用素が $\frac{n(n+1)}2$-正、$\frac{n+1}2$-正、$(n-1)$-正ならば、それぞれスカラー曲率、Ricci曲率、直交Ricci曲率が正となる。「正」を「非負」に置き換えた主張も成り立つ。

さらに $n$-正値性から

$$
2\operatorname{Ric}(e_b,e_b)-R(e_b,Je_b,e_b,Je_b)>0
$$

が従い、$\alpha\leq n-1$ で $\alpha$-正ならば $M$ は既約である。系として、$\frac{n+1}{2}$-正値性は $h^{m,0}=0$（$1\leq m\leq n$）を、コンパクトな場合の $(n-1)$-正値性は $h^{n-1,0}=h^{2,0}=0$ を与える。

### Kähler--Einstein多様体の剛性（Theorem 1.4）

$(M,g,J)$ を複素次元 $n$ のコンパクトKähler--Einstein多様体とする。$N=\frac{n(n+1)}2$ とおき、$\beta\leq\frac n2$ に対して

$$
\lambda_1+\cdots+\lambda_\beta\geq-\beta\theta(n,\beta)\bar\lambda,
$$

$$
\theta(n,\beta)=
\frac{-2N\beta-(n-1)N+(n+3)\beta}
{2N\beta+2nN-2(n+2)\beta}
$$

が成り立つならば、$M$ の正則断面曲率は非負の定数である。$\beta>1$ ではこの条件が負の固有値を許すため、Calabi作用素全体の正値性から出発する既知の剛性より柔軟である。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.05106](https://arxiv.org/abs/2609.05106)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.4; Corollaries 1.2, 1.3
- **論文構成の説明:** Introductionには独立した論文構成の説明なし
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
