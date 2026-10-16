---
layout: paper
title: Resolutions of compact balanced spaces
title_ja: コンパクトbalanced複素空間の任意の解消はbalancedとなる
authors: Jixiang Fu, Wei Xia
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Let $X$ be a compact reduced balanced complex space of pure dimension $n\geq2$. We prove that every resolution of singularities of $X$ is a balanced manifold; in particular, $X$ belongs to the class $\mathscr{B}$. This removes the additional cohomological assumptions appearing in earlier results of Fu-Meng-Xia. The main new ingredient is the linear independence of the Aeppli classes of the exceptional prime divisors of a projective bimeromorphic morphism onto a normal complex space. This follows from the vanishing of curve degrees for Aeppli-trivial divisors and the relative negativity lemma. For non-normal spaces, strict positivity is used to eliminate divisors mapping onto codimension-one subsets before passing to the normalization. We also recall a classical surface example of Grauert showing that the inclusion of compact balanced spaces in $\mathscr{B}$ is strict.
topic: several-complex-variables
tags:
- complex-analytic-spaces
- singularities
- positivity
- birational-geometry
arxiv_id: 2610.21728v1
arxiv_url: https://arxiv.org/abs/2610.21728
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 純次元2以上のコンパクト被約balanced複素空間について、任意の特異点解消がbalanced多様体になることを示す。例外因子のAeppli類の独立性を用い、従来必要だった大域的コホモロジーの単射性条件を取り除く。
abstract_en: ''
summary_en: The paper compares positivity on a singular complex space with positivity on its resolutions. Rather than requiring an injective cohomology map on the entire resolution, it isolates the exceptional divisor classes. Their independence follows from numerical triviality and a negativity argument. A separate positivity step handles non-normal spaces, and a classical surface example shows that the converse implication fails.
abstract_ja: コンパクト被約複素空間が滑らかなd閉で厳密に正の(n−1,n−1)形式を持つなら、全ての特異点解消がbalancedとなる。例外素因子のAeppli類の線形独立性により、Bott–ChernからAeppliへの写像の大域的単射性を仮定する必要がなくなる。非正規空間では余次元1へ写る因子を正値性で除外する。balancedな解消を持つ空間が自身もbalancedとは限らない。
abstract_source_url: https://arxiv.org/abs/2610.21728
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21728v1](https://arxiv.org/abs/2610.21728)
- **著者:** Jixiang Fu, Wei Xia
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

balanced計量は、複素次元$n$のHermitian計量の基本形式$\omega$が$d\omega^{n-1}=0$を満たすという正値性条件である。特異複素空間では、滑らかな閉じた厳密に正の$(n-1,n-1)$形式を用いて対応する条件を定める。本論文は、この条件が特異点解消へ持ち上がるかを調べる。

結論は、純次元$n\ge2$のコンパクト被約balanced複素空間なら、任意の特異点解消がbalanced多様体になるというものである。先行研究が課していた、解消全体のBott–ChernコホモロジーからAeppliコホモロジーへの写像の単射性を不要にする。

鍵となるのは、全コホモロジーの単射性ではなく、例外因子が生成する部分だけの単射性で十分だという観点である。この部分は、因子のAeppli自明性から曲線上の次数の消滅を導き、相対negativity lemmaを用いることで制御できる。非正規な空間にも、追加の正値性の議論を経て適用される。

## 背景と問題設定

滑らかな複素多様体では、balanced計量の存在は、滑らかな$d$閉かつ厳密に正の$(n-1,n-1)$形式の存在と同値である。Fu–Meng–Xiaは後者を被約複素空間へ拡張し、balancedな解消を持つコンパクト被約複素空間のクラスを$\mathscr B$と定義した。

先行結果では、ある解消$M$について自然な写像

$$
\iota\_M:H\_{\mathrm{BC}}^{1,1}(M)\longrightarrow H\_A^{1,1}(M)
$$

が単射という追加仮定を置いていた。本論文は、特異空間の正値性から解消のbalanced性を得るために、この大域的な仮定が本当に必要かを問い直す。

## 主結果

### 主定理（Theorem 1.1）

コンパクト被約複素空間$X$が純次元$n\ge2$で、滑らかな$d$閉かつ厳密に正の$(n-1,n-1)$形式を持つなら、**任意の特異点解消はbalanced多様体**となる。特に$X\in\mathscr B$である。

正規性や$\iota\_M$の大域的単射性は仮定しない。一方、単なる被約性だけでなく純次元、コンパクト性、厳密な正値性を含む仮定を保つ必要がある。

### 例外Aeppli類の独立性

Introductionで述べられる主要な幾何学的入力は、正規複素空間への射影的双有理射$f:M\to Z$の例外素因子$E\_1,\ldots,E\_r$について

$$
\sum\_{j=1}^r a\_j[E\_j]\_A=0\quad\Longrightarrow\quad a\_1=\cdots=a\_r=0
$$

となることである。Aeppli類がゼロの実因子は全てのコンパクト既約曲線との次数がゼロとなり、特に$f$に関して数値的に自明となる。例外因子に対する相対negativity lemmaが、その因子自体の消滅を強制する。

### 逆向きは成立しない

得られる包含は

$$
\lbrace \text{compact balanced spaces}\rbrace \subsetneq\mathscr B
$$

であり、すでに複素二次元で真の包含となる。Introductionは、滑らかな射影的線織曲面の負の切断を縮約したGrauertの古典例を挙げる。得られる正規コンパクト曲面はKähler解析空間でないが、射影的な解消を持つため$\mathscr B$に属する。二次元のbalanced空間はKählerとなるので、この曲面自身はbalancedではない。

## 証明の見取り図

balanced性を妨げる正のカレントを、引き戻した正形式とのペアリングによって特異集合の上へ局所化する。正規空間上では、その支持に現れる例外因子のAeppli類の独立性が障害の消滅を導く。

非正規な空間では、特異集合の上の因子が余次元1の集合へ写る可能性があり、その段階では例外因子とみなせない。厳密な正値性でこの種の成分の係数をゼロにした後、正規化へ移り、残る余次元2以上へ写る因子に独立性の議論を適用する。

## 原論文との対応

- **Abstractページ:** [Resolutions of compact balanced spaces](https://arxiv.org/abs/2610.21728)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21728v1) — Section 1, pp. 1–2（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; Introduction中の例外Aeppli類の独立性と真の包含
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21728v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
