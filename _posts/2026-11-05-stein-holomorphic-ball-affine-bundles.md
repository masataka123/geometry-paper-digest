---
layout: paper
title: Stein Criteria for Holomorphic Fibre Bundles
title_ja: 正則球束・アフィン束のStein判定と標準拡張
authors: Masakazu Takakura
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this paper, we study Steinness of holomorphic fibre bundles. Over a compact Riemann surface, we prove that every holomorphic ball bundle is weakly $1$-complete and that its total space is Stein if and only if it admits no holomorphic section. We also obtain higher-dimensional Stein criteria for reductive ball bundles and affine bundles in terms of positivity of the canonical class. A topological obstruction to the $1$-convexity of holomorphic fibre bundles is also established.
topic: several-complex-variables
tags:
- stein-geometry
- positivity
- vector-bundles-sheaves
- noncompact-kahler-geometry
arxiv_id: 2611.01693v1
arxiv_url: https://arxiv.org/abs/2611.01693
arxiv_submitted: '2026-11-01'
arxiv_updated: '2026-11-01'
summary: 正則球束とアフィン束の全空間がSteinになる条件を、切断の不存在や底のKähler類の正値性で記述する。高次元の底では単なるコンパクト解析部分集合の不存在では不十分であり、還元的モノドロミーや平行代表の仮定が役割を持つ。
abstract_en: ''
summary_en: The paper compares analytic convexity of bundle total spaces with geometry on their bases. For ball bundles over curves, the absence of a holomorphic section is decisive. In higher dimension, positivity of a natural cohomology class replaces that simple criterion under stated representation or curvature assumptions. A related construction treats affine bundles and yields a Steinness statement for canonical extensions over complete Kähler manifolds.
abstract_ja: 正則ファイバー束の全空間のStein性を調べる。コンパクトRiemann面上の正則球束は弱1完備であり、正則切断が存在しないことと全空間がSteinであることが同値となる。高次元では、還元的な球束やアフィン束について自然なコホモロジー類の正値性による判定を与える。また正則ファイバー束の1凸性に対する次元上の位相的障害も示す。
abstract_source_url: https://arxiv.org/abs/2611.01693
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.01693v1](https://arxiv.org/abs/2611.01693)
- **著者:** Masakazu Takakura
- **初回投稿日:** 2026-11-01
- **最終更新日:** 2026-11-01
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素多様体がSteinであることは、正則関数による制御や厳密な多重劣調和尽窮関数の存在と結び付く。正則束ではファイバーがSteinであっても全空間がSteinになるとは限らず、底とモノドロミーの幾何を調べる必要がある。

本論文は球束とアフィン束を対象とし、まず曲線を底とする場合の明快な判定を与える。球束なら正則切断がないこと、半負な束をモデルとするアフィン束ならそのコホモロジー類が非零であることが鍵となる。

高次元では同じ判定をそのまま使えず、還元的モノドロミーや平行Dolbeault代表という仮定のもとで、自然な類がKähler類であることを条件とする。最後に標準拡張を扱い、非負の正則双断面曲率を持つ完備Kähler多様体上でStein性を得る。

## 背景と問題設定

弱1完備とは滑らかな多重劣調和尽窮関数があることであり、厳密な多重劣調和尽窮関数があればSteinとなる。1凸性は例外的なコンパクト解析部分を許す概念で、Stein性と同一ではない。

球束は表現$\rho:\pi\_1(X)\to\operatorname{Aut}(\mathbb B^m)$から$E\_\rho=\widetilde X\times\_\rho\mathbb B^m$として記述する。アフィン束ではベクトル束$E$と$t\in H^1(X,E)$から$E\_t$を作る。本文はこの二つについて、底の幾何と尽窮関数の関係を比較する。

## 主結果

### 曲線上の球束（Theorem 1.3）

連結コンパクトRiemann面$R$上の正則$\mathbb B^m$束は、任意の$m\geq1$で弱1完備であり、次の三条件が同値となる。全空間がSteinであること、正則切断を持たないこと、正次元コンパクト解析部分集合を含まないことである。

これは高次元の底へそのまま延長できない。著者はコンパクトKähler曲面上で、正次元コンパクト解析部分集合を持たないがSteinでない還元的な球束の例を示すと述べる。

### 高次元の球束とToledo類（Theorem 1.4）

$X$が複素次元2以上のコンパクトKähler多様体で$\rho$が還元的なら、

$$
E\_\rho\text{ がStein}\quad\Longleftrightarrow\quad c\_\rho\text{ がKähler類}
$$

となる。$c\_\rho$は論文のToledo類である。曲線上では$c\_\rho=0$でもSteinな例があり、次元仮定を落とすことはできない。

### 1凸性の次元障害と構造（Theorems 1.5, 1.6）

複素次元$n$のコンパクト複素多様体上に、次元$m$の有界対称領域をファイバーとする1凸な正則束があるなら

$$
m\geq n
$$

である。この障害には底のKähler性を要求しない。

さらに底が次元2以上のコンパクトKähler多様体で、還元的球束が1凸なら、正則または反正則切断$s$が存在する。反正則なら全空間はSteinとなり、正則なら$s^\ast K\_{E\_\rho/X}$は豊富となる。

### アフィン束の判定（Theorem 1.8）

$X$が弱1完備、$(E,h)$がGriffiths半負のHermitian正則ベクトル束、$a$がChern接続$D\_h$について$D\_ha=0$を満たす$E$値$(0,1)$形式なら、$E\_{[a]}$は弱1完備となる。閉半正形式

$$
\omega\_{h,a}=-\sqrt{-1}\thinspace h(a,a)
$$

を用い、さらに$X$がコンパクトKählerなら

$$
E\_{[a]}\text{ がStein}\quad\Longleftrightarrow\quad[\omega\_{h,a}]\text{ がKähler類}
$$

となる。平行代表の存在は高次元での追加条件であり、任意のアフィン束に無条件に適用してはならない。

### 曲線の場合と半正双対（Corollaries 1.9, 1.10）

コンパクトRiemann面上では、Griffiths半負な$(E,h)$に対しすべての$E\_t$が弱1完備で、$t\neq0$とStein性が同値になる。一方、コンパクトKähler多様体上で$(E^\ast ,h^\ast )$がNakano半正なら、各$t$の調和代表が平行となり、すべての$E\_t$は弱1完備となる。後者だけから全空間がSteinとは結論しない。

### 完備Kähler多様体の標準拡張（Theorem 1.11）

$(X,\omega)$が完備Kählerで正則双断面曲率が非負なら、Kähler類から作るアフィン束としての標準拡張$\Omega^1\_{[\omega]}$はSteinとなる。ここでいう標準拡張は一般のベクトル束拡張の総称ではなく、論文がGreb–Wongの規約で用いるアフィン束である。

## 証明の見取り図

球束では還元的表現に伴う多重調和切断と剛性定理を用い、その正則・反正則・低階数の可能性を整理する。アフィン束ではDolbeault方程式の局所解から滑らかな切断を作り、その切断からのファイバー方向の距離の二乗を使って尽窮関数を構成する。双対束の半正性から平行性を導く際にはBochner–Kodaira–Nakano恒等式を使う。標準拡張の非コンパクト完備の場合には、明示的尽窮関数とNi–Tamの熱流による評価を組み合わせる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.01693)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.01693v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.3–1.6, 1.8, 1.11; Corollaries 1.9–1.10（Theorems 1.1, 1.2, 1.7は引用結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.01693v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
