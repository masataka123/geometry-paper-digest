---
layout: paper
title: "Asymptotic expansions of $L^2$-extension indices and curvature positivity"
title_ja: "$L^2$拡張指数の漸近展開と曲率の正値性"
authors: "Takahiro Inayama"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  In this paper, we prove an asymptotic expansion of the $L^2$-extension index of a smooth Hermitian metric on a holomorphic vector bundle, in which the Chern curvature appears as the second-order coefficient. By using this expansion, we show in a unified way that there is an equivalence between how sharp the $L^2$-extension is and how positive or negative the curvature is. We also introduce a new notion of $q$-$L^2$-extension indices and investigate partial positivity and flatness in terms of these indices.
topic: several-complex-variables
tags:
  - l2-methods
  - vector-bundles-sheaves
  - curvature
  - positivity
arxiv_id: "2609.15088v1"
arxiv_url: "https://arxiv.org/abs/2609.15088"
arxiv_submitted: "2026-09-14"
arxiv_updated: "2026-09-14"
summary: >-
  正則ベクトル束の滑らかなHermite計量に対する$L^2$拡張指数を局所的に漸近展開し、Chern曲率が二次係数として現れることを示す。これにより拡張評価の鋭さからGriffiths正値・負値、部分正値性、平坦性を統一的に読み取れる。
abstract_en: ""
summary_en: >-
  The work studies the optimal local cost of extending a prescribed vector in a Hermitian holomorphic vector bundle. A second-order expansion of this extension index recovers directional Chern curvature. Consequently, sharp extension estimates encode positive and negative Griffiths curvature. A higher-rank family of indices is also introduced to detect partial positivity and flatness.
abstract_ja: >-
  正則ベクトル束上の滑らかなHermite計量について$L^2$拡張指数の漸近展開を証明し、その二次係数にChern曲率が現れることを示す。この展開により、$L^2$拡張の鋭さと曲率の正値性・負値性との同値関係を統一的に導く。さらに$q$-$L^2$拡張指数という新しい概念を導入し、部分正値性と平坦性をこれらの指数から調べる。
abstract_source_url: "https://arxiv.org/abs/2609.15088"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.15088](https://arxiv.org/abs/2609.15088)
- **著者:** Takahiro Inayama
- **初回投稿日:** 2026年9月14日
- **最終更新日:** 2026年9月14日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ohsawa--Takegoshiの$L^2$拡張定理では、一点で与えた値を持つ正則切断をどれほど小さい$L^2$ノルムで拡張できるかが中心となる。最適拡張性と曲率半正値性の関係は知られていたが、拡張定数の局所的な鋭さが曲率をどの程度定量的に記録するかが問題となる。

本論文は、小さな正則円筒上の最小拡張定数で定義される$L^2$拡張指数を展開し、Chern曲率が厳密に二次係数として現れることを示す。したがって、正値性だけでなく負値性も指数の両側漸近評価から復元できる。

さらに$q$-$L^2$拡張指数を導入し、曲率固有値の和で表される一様部分正値性と結び付ける。複数の$q$で指数が恒等的に1となる条件からHermite計量の平坦性も特徴づける。

## 背景と問題設定

$E\to\Omega\subset\mathbb C^n$を正則ベクトル束、$h$を滑らかなHermite計量とする。点$a$、半径$r,s$、ユニタリ行列$A$から正則円筒$P_{r,s,A}=A(\Delta_r\times B_s^{n-1})$を作り、$\xi\in E_a\setminus\{0\}$を値に持つ平方可積分正則切断の正規化$L^2$ノルムの下限を$L_h(a,r,s,A,\xi)$とする。

この指数はOhsawa--Takegoshi型拡張の最良定数であり、領域を一点へ縮めたときの二次変化が曲率情報を担う。

## 主結果

### $L^2$拡張指数の展開（Theorem 1.2）

固定した$a\in\Omega$と$0\neq\xi\in E_a$について、$\{e_1,\ldots,e_n\}$を$\mathbb C^n$の標準基底とすると、

$$
\begin{aligned}
L_h(a,r,s,A,\xi)
={}&1-\frac{r^2}{2}
\frac{\langle\Theta_h(Ae_1,Ae_1)\xi,\xi\rangle_{h(a)}}{|\xi|_{h(a)}^2}\\
&-\frac{s^2}{n}\sum_{j=2}^n
\frac{\langle\Theta_h(Ae_j,Ae_j)\xi,\xi\rangle_{h(a)}}{|\xi|_{h(a)}^2}
+O((r^2+s^2)^2)
\end{aligned}
$$

が成り立つ。Chern曲率の方向成分が二次係数そのものとして現れる点が核心である。

### 正負曲率・部分正値性への帰結

Introductionでは、Theorem 1.2からGriffithsの意味での曲率の両側評価と指数の両側漸近評価との同値が従うと述べられる。また$q$-$L^2$拡張指数について対応する展開を証明し、固有値和条件による一様部分正値性、最小・最適拡張性の部分正値版、および$1\leq q\leq n-1$で$L_h^{(q)}\equiv1$となることによる平坦性の特徴づけを得る。

## 証明の見取り図

点$a$の近傍で、計量行列の二次項がChern曲率係数になる正則フレームを選ぶ。ユニタリ座標変換で円筒を標準位置へ戻し、指定値$\xi$を持つ最小ノルム切断を、零点条件を持つ切断空間の直交補として取る。

円筒の各座標回転に対する対称性により異なる多重指数の積分が消え、計量のTaylor展開の二次項だけが主要項に残る。残差を一様に評価して$O((r^2+s^2)^2)$を得る。この一つの展開式を方向と円筒の太さについて使い分け、曲率の正負および固有値和を抽出する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.15088](https://arxiv.org/abs/2609.15088)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Theorem 1.2（およびTheorems 2.2, 3.2, 3.3, 3.6, 3.7への案内）
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
