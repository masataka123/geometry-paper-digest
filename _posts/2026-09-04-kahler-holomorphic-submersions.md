---
layout: paper
title: 'Kähler structures for holomorphic submersions'
title_ja: '正則沈め込みに対するKähler構造'
authors: "Chi Li"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  In this short paper, for any holomorphic submersion $π: X\rightarrow B$, we derive a criterion for $X$ to have Kähler structures. This criterion generalizes Blanchard's criterion for a special class of isotrivial holomorphic submersions. We use this criterion to answer a question of Harvey-Lawson in the case of fiber dimension one. As the main application, we prove that the existence of Hermitian-Symplectic structures on certain class of holomorphic submersions with Kähler fibers and Kähler bases implies that the total spaces are Kähler. This class includes isotrivial submersions and torus fibrations.
topic: differential-geometry
tags: []
arxiv_id: "2302.07220v1"
arxiv_url: "https://arxiv.org/abs/2302.07220"
arxiv_submitted: "2023-02-14"
arxiv_updated: "2023-02-14"
summary: >-
  コンパクト複素多様体間の正則沈め込み $\pi:X\to B$ について、全空間 $X$ がKählerとなるための必要十分条件を、底空間のKähler性とファイバー上のKähler類へ制限される大域コホモロジー類の存在で与える。応用として、Kählerな底とファイバーを持つHermitian–symplectic沈め込みが、等自明、トーラス・ファイブレーションなどの条件下で必ずKählerになることを示す。
abstract_en: >-
  In this short paper, for any holomorphic submersion $π: X\rightarrow B$, we derive a criterion for $X$ to have Kähler structures. This criterion generalizes Blanchard's criterion for a special class of isotrivial holomorphic submersions. We use this criterion to answer a question of Harvey-Lawson in the case of fiber dimension one. As the main application, we prove that the existence of Hermitian-Symplectic structures on certain class of holomorphic submersions with Kähler fibers and Kähler bases implies that the total spaces are Kähler. This class includes isotrivial submersions and torus fibrations.
summary_en: ""
abstract_ja: >-
  任意の正則沈め込み $π:X\rightarrow B$ に対し、全空間 $X$ がKähler構造を持つための判定条件を導く。この条件は、特別な等自明正則沈め込みに対するBlanchardの条件を一般化する。ファイバー次元1の場合にはHarvey–Lawsonの問いに答える。主な応用として、KählerファイバーとKähler底空間を持つある種の正則沈め込みでは、Hermitian–symplectic構造の存在から全空間のKähler性が従うことを証明する。このクラスは等自明沈め込みとトーラス・ファイブレーションを含む。
abstract_source_url: "https://arxiv.org/abs/2302.07220"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2302.07220](https://arxiv.org/abs/2302.07220)
- **著者:** Chi Li
- **初回投稿日:** 2023年2月14日
- **最終更新日:** 2023年2月14日
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

正則沈め込み $\pi:X\to B$ の全空間がKählerならば、底 $B$ もKählerであり、$H^2(X,\mathbb R)$ には各ファイバー上でKähler類となる類が存在する。本論文は、この二つの明らかな必要条件が実は十分でもあることを示す。

判定条件はLerayスペクトル系列を用いてさらに弱く書ける。モノドロミー不変なファイバーKähler類 $[\omega]$ が $d_2[\omega]=0$ を満たし、底がKählerならば全空間はKählerである。これは等自明沈め込みに対するBlanchardの結果を一般化する。

Hermitian–symplectic構造を持つ正則沈め込みでは必要な $d_2$ 消滅が自動的に成立する。この観察により、等自明性、トーラス・ファイバー、特定のモノドロミー条件などのいずれかのもとで、非KählerなHermitian–symplectic全空間は存在しないと分かる。

## 背景と問題設定

$X,B$ をコンパクト複素多様体、$\pi:X\to B$ を正則沈め込みとする。各埋め込み $f_b:X_b\hookrightarrow X$ に対して、大域類の制限

$$
f_b^*:H^k(X,\mathbb R)\longrightarrow H^k(X_b,\mathbb R)
$$

を考える。問題は、各ファイバー上でKählerとなる次数2の大域類と底のKähler性から、全空間上の閉正 $(1,1)$ 形式を構成できるかという点にある。

## 主結果

### Kähler性の判定（Theorem 1.1）

$X$ がKählerであることと、次の二条件は同値である。

1. $H^2(X,\mathbb R)$ に、すべてのファイバー $X_b$ 上でKähler類へ制限される類 $[Q]$ が存在する。
2. $B$ がKählerである。

$[Q]$ が初めから閉 $(1,1)$ 形式で表されるとは仮定しない点が核心であり、論文はその代表元を構成する。

### Lerayスペクトル系列による精密化（Theorem 1.2）

$[\omega]\in H^0(B,R^2\pi_*\mathbb R)$ が各ファイバー上でKähler類となり、

$$
d_2[\omega]=0\quad\text{in }E_2^{2,1}=H^2(B,R^1\pi_*\mathbb R),
$$

かつ $B$ がKählerであることが、$X$ のKähler性と同値である。これはTheorem 1.1の条件より一見弱い局所系上の条件である。

### Hermitian–symplectic沈め込み（Theorem 1.3）

$X$ がHermitian–symplectic構造を持ち、ファイバーと底がKählerであるとする。沈め込みが等自明、ファイバーが複素トーラス、$\pi_1(B)$ の $H^2(F)$ 上のモノドロミー作用が自明、または $H^{2,0}(F)=0$ のいずれかを満たせば、$X$ はKählerである。

## 証明の見取り図

Lerayスペクトル系列をフィルター付きde Rham複体で記述し、Gauss–Manin接続と外微分の整合性を利用する。偏極Hodge構造の変動に対するDeligneのHodge理論から $\partial\bar\partial$ 補題の変種を導き、Lerayフィルトレーションに沿って閉 $(1,1)$ 形式を段階的に構成する。Hermitian–symplecticの場合は、その構造から $d_2[\omega]=0$ を得て判定定理を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2302.07220](https://arxiv.org/abs/2302.07220)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
