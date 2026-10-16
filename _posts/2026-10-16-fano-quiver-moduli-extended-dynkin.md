---
layout: paper
title: Series of Fano quiver moduli from extended Dynkin quivers
title_ja: 拡大Dynkinクイバーから生じるFano多様体の五つの無限系列
authors: Pieter Belmans, Markus Reineke
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.RT
arxiv_abstract: Associated to small extended Dynkin quivers, we construct series of Fano varieties of fixed Picard rank at most five and arbitrary even dimension, which admit a very explicit description of their geometry. For example, they all admit a flat morphism to a projective space, whose general fiber is a product of projective lines. We also give a closed formula for all Betti numbers, and interpret this formula in terms of an action of a cohomological Hall algebra on the cohomology of all the varieties in a series.
topic: algebraic-geometry
tags:
- fano-varieties
- moduli
- algebraic-cycles-enumerative
arxiv_id: 2610.22203v1
arxiv_url: https://arxiv.org/abs/2610.22203
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 拡大Dynkinクイバーのframed表現のモジュライから、任意の正の偶数次元でFano多様体の五つの系列を構成する。射影空間への平坦射、一般ファイバー、Betti数を明示し、それらのコホモロジーをHall代数の作用で関連づける。
abstract_en: ''
summary_en: The paper organizes explicit Fano varieties into five sequences indexed by even dimension. Their presentation as framed representation moduli supplies a flat map with a simple general fiber. A uniform generating series describes the cohomology across the sequences. An action of a cohomological Hall algebra explains why these numerical patterns occur together.
abstract_ja: 小さな拡大Dynkinクイバーとframingから、Picard数が5以下で一定のFano多様体の無限系列を得る。一般的な忘却射の平坦性とファイバーの記述を先に確立し、安定性のchamberを比較してFanoとなる五つの系列を取り出す。各系列のBetti数は閉じた生成関数で与えられ、全次元のコホモロジーに働くcohomological Hall代数がその構造を説明する。
abstract_source_url: https://arxiv.org/abs/2610.22203
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.22203v1](https://arxiv.org/abs/2610.22203)
- **著者:** Pieter Belmans, Markus Reineke
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.AG（主分類）; math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体の具体例を一つずつ調べる代わりに、全ての正の偶数次元にわたる系列として構成する論文である。出発点は拡大Dynkinクイバーの表現であり、framingを加えたモジュライ空間が主要な幾何学的対象となる。

framingを忘れる射の行き先は射影空間である。Euler形式に対称性条件を課すと、この射は平坦になり、一般ファイバーは射影空間の積として記述できる。さらにframingに由来する安定性と標準的な安定性が同じchamberに入る条件から、Fano多様体の五つの無限系列が現れる。

得られる多様体は有理的で、無限小剛性を持ち、Hodge–Tate型のコホモロジーを持つ。Betti数は次元を横断する単一の生成関数で表される。著者らはその規則性を、各系列のコホモロジー全体に作用するcohomological Hall代数を通じて説明する。

## 背景と問題設定

$Q$を拡大Dynkinクイバー、$\delta$をその一意なimaginary Schur root、$\langle-,-\rangle$をEuler形式とし、$\partial=\langle\delta,-\rangle$を安定性パラメータとする。反対称化したEuler形式が$\ker\partial$上で消えるという仮定を置く。この条件の下で現れる型は$\widetilde A\_1,\widetilde A\_2,\widetilde A\_3,\widetilde D\_4$である。

非零のframingベクトル$\mathbf n$と$k\ge1$に対して、framedモジュライからの忘却射

$$
p:M^{\partial\text{-fr}}(Q,k\delta,\mathbf n)
\longrightarrow M^{\partial\text{-sst}}(Q,k\delta)\simeq\mathbb P^k
$$

を考える。ここでframed側の安定性は、Introductionで指定される正の線形汎関数と十分大きな定数による同じchamber内の選択を使う。

## 主結果

### 忘却射の構造（Theorem A）

上の対称性条件の下で、任意の非零$\mathbf n$と$k\ge1$について忘却射は平坦であり、相対次元と一般ファイバーは

$$
\dim p^{-1}(x)=(\mathbf n\cdot\delta-1)k,
\qquad
p^{-1}(x)\simeq(\mathbb P^{\mathbf n\cdot\delta-1})^k
\quad\text{（一般の }x\text{）}
$$

となる。さらに、表現のpolystable分解を記録する各Luna stratum上では、ファイバーはJordanクイバーと有向2-cycleのframed nilpotentモジュライの積で記述される。これにより、一般ファイバーだけでなく退化の構造にも接近できる。

### Fano系列とBetti数（Theorem B）

Table 1に列挙される五つのクイバーとframingの組は、$\mathbf n\cdot\delta=2$と、$\partial(\mathbf i)\le0$となる頂点で$n\_i\ge1$を満たす。各組について

$$
X\_k^{\mathbf n}(Q)=M^{\partial\text{-fr}}(Q,k\delta,\mathbf n)
$$

は滑らかなFano多様体であり、$\dim X\_k^{\mathbf n}(Q)=2k$、Picard数は$|Q\_0|$となる。五つの組は$\widetilde A\_1$型の二通りと$\widetilde A\_2,\widetilde A\_3,\widetilde D\_4$型からなる。向きとframingの完全な指定は原論文Table 1に依存し、同じ型の任意のframingがFanoになるという主張ではない。

全て有理的、純Hodge–Tate型、無限小剛性を持つ。指数はTable 1の$\widetilde A\_1(a)$の場合が2で、他の四系列は1である。一般ファイバーは$(\mathbb P^1)^k$となる。

Betti数は次の明示式で決まる。

$$
\sum\_{j\ge0}a\_jx^j=\frac{(1+x)^{|Q\_0|}}{(1-x^2)^3},
\qquad
b\_{2i}(X\_k^{\mathbf n}(Q))=a\_{\min\lbrace i,2k-i\rbrace }quad(1\le i\le2k).
$$

低次元では、$k=1$の五系列は$\mathbb P^1\times\mathbb P^1$および$\mathbb P^2$の1点から4点のblow-upとなる。$k=2$では、射影平面への忘却射を持つFano四次元多様体となる。

## 証明の見取り図

Euler形式の対称性を利用してLuna stratum上のファイバーを記述し、その構造から平坦性を導く。次に安定性のchamberを比較してFano性を判定する。Betti数にはクイバーDT/PT対応を用い、拡大Dynkin型で計算可能な半安定Donaldson–Thomas不変量を活用する。

cohomological Hall代数が各系列の全コホモロジーに作用し、対応する巡回加群がBetti数の生成関数の構造的説明を与える。Introductionは、単独のFano四次元多様体で観察されたファイブレーションを、全偶数次元へ拡張する構成として位置づけている。

## 原論文との対応

- **Abstractページ:** [Series of Fano quiver moduli from extended Dynkin quivers](https://arxiv.org/abs/2610.22203)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.22203v1) — Section 1, pp. 1–3; Introductionから参照されるTable 1（p. 4）
- **Introduction中で言及された主要結果:** Theorems A–B; equation (3)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.22203v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
