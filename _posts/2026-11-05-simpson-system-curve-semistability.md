---
layout: paper
title: Curve semistable Higgs bundles and smooth projective varieties whose canonical bundle is ample
title_ja: Simpson系の曲線半安定性と標準束が豊富な多様体
authors: Armando Capasso
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Considering the so-called Simpson system on smooth projective varieties, defined over an algebraically closed field of characteristic $0$, whose canonical bundle is ample, we provide a new proof of the stability of this Higgs bundle, which in turn yields another proof of the Miyaoka-Yau inequality. When equality holds, we prove that the discriminant class of the Simpson system is numerically trivial and that this Higgs bundle is curve semistable. This result follows from a study of the relations between weak ampleness, numerically effectiveness for Higgs bundles that ``feel'' the Higgs field and (semi)stability. Moreover, we obtain another proof of the algebraic hyperbolicity of these varieties which provides a lower bound on a positive real constant related to this property; to best of our knowledge, this is the first and only result of this type. We conjecture that a similar lower bound holds for smooth projective varieties whose canonical bundle is ample.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- stability
- chern-classes
- positivity
- hyperbolicity
arxiv_id: 2508.12062v3
arxiv_url: https://arxiv.org/abs/2508.12062
arxiv_submitted: '2025-08-16'
arxiv_updated: '2026-11-04'
summary: 標準束が豊富な滑らかな射影多様体について、Simpson系の安定性を通じてMiyaoka–Yau不等式を再証明する研究である。等号の場合には曲線への引き戻しの半安定性、判別式の数値的自明性、双曲性へ議論を進める。
abstract_en: ''
summary_en: The paper organizes several consequences of an ample canonical bundle through the positivity theory of Higgs bundles. Its central object is the Simpson system, whose stability yields a Chern-number restriction. Particular attention is paid to the equality case and to what happens after pullback to curves. The introduction separates these conclusions from a proposed extension of a quantitative hyperbolicity bound.
abstract_ja: 標数0の代数閉体上で標準束が豊富な滑らかな射影多様体を対象とし、Simpson系の安定性とMiyaoka–Yau不等式に別証明を与える。等号の場合には判別式の数値的自明性と曲線半安定性を示す。Higgs場を反映する弱い豊富性や数値的有効性の関係を用い、等号を満たす多様体の代数的双曲性について、関連する正定数の下界を伴う証明も与える。一般の豊富な標準束を持つ多様体への同種の下界は予想として提示される。
abstract_source_url: https://arxiv.org/abs/2508.12062
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2508.12062v3](https://arxiv.org/abs/2508.12062)
- **著者:** Armando Capasso
- **初回投稿日:** 2025-08-16
- **最終更新日:** 2026-11-04
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Chern数の不等式は、複素多様体の位相的不変量と曲率・一意化の関係を表す。本論文は、標準束が豊富な滑らかな射影多様体に付随するSimpson系を用い、この関係をHiggs束の安定性と正値性から捉え直す。

出発点はSimpson系の標準偏極に関する安定性の別証明であり、これからMiyaoka–Yau不等式が従う。新しい不等式を初めて発見するという位置づけではなく、既知の不等式を導く方法と、その等号の場合に得られるHiggs束の性質を整理する研究である。

等号の場合にはSimpson系を任意の滑らかな射影曲線に引き戻しても半安定になることが重要になる。著者はこれを判別式の数値的自明性、余接束の豊富性、代数的双曲性へ結び付ける。最後の定量的下界を一般の豊富な標準束の場合へ広げることは、証明済みの結果とは分けて予想されている。

## 背景と問題設定

$X$を次元$n\geq2$の滑らかな射影多様体とし、$K\_X$を豊富とする。Introductionでは$ c\_k(X)=(-1)^k c\_k(\Omega\_X^1)$という接束側の符号規約を用いる。複素数体上でYauが示した不等式は

$$
\operatorname{MY}(X)=(-1)^n\int\_X\left(c\_2(X)-\frac{n}{2(n+1)}c\_1(X)^2\right)c\_1(X)^{n-2}\geq0
$$

である。複素球による被覆はその等号条件として知られる。本論文の安定性と数値的正値性の議論は標数0の代数閉体上で行い、複素球一意化については複素数体上に戻る。

Simpson系を$\mathcal S=(S,\varphi)$と書く。Higgs束の正値性には複数の定義があり、著者は強いHiggs豊富性と弱いHiggs豊富性を区別する。弱い豊富性とHiggs数値的有効性はHiggs場が零なら通常の束の対応概念に戻るが、強い豊富性については同じことを無条件に言えない。

## 主結果

### 安定性とChern数不等式（Theorems 3.2, 3.3）

Simpson系は$K\_X$に関して安定であり、上のMiyaoka–Yau不等式が従う。対象は標数0の代数閉体上の滑らかな射影多様体で、$K\_X$の豊富性が主要仮定である。IntroductionはSimpsonの先行結果の仮定も区別しており、任意の次元で安定性が既に無条件に述べられていたかのようには扱っていない。

### 等号と曲線半安定性（Corollary 3.4）

等号の場合、Simpson系は曲線半安定となり、任意の偏極に関して半安定になる。ここで曲線半安定とは、滑らかな射影曲線$C$からの任意の射$f:C\to X$に対して$f^\ast \mathcal S$が半安定になる性質である。Introductionが述べる中心条件と結論は

$$
\int\_X\Delta(S)K\_X^{n-2}=0,
\qquad
c\_2(X)-\frac{n}{2(n+1)}c\_1(X)^2\equiv\_{\mathrm{num}}0
$$

であり、$\Delta(S)=c\_2(S\otimes S^\vee)/(2(n+1))$である。一つの交点数の消失から数値的な類の消失と、曲線上での安定性へ進む点が本論文の軸となる。

### 豊富性・双曲性・一意化（Corollary 3.7, Theorems 5.2, 5.4）

等号を満たす場合には余接束の豊富性を得る。複素数体上では代数的双曲性と複素球による一意化にも別証明を与える。Introductionでは概略として、代数的双曲性に関わる正定数について下界を得ると述べられているが、その定数の具体式はこの範囲には記されていないため補わない。等号を仮定しない一般の場合への類似の下界はConjecture 5.6である。

## 証明の見取り図

Higgs Grassmannスキームを使う正値性の概念により、Higgs場を無視した通常の束の正値性とは異なる情報を取り出す。Simpson系の安定性から判別式の不等式へ進み、等号の消失条件から曲線半安定性を得る。さらに弱いHiggs豊富性と商Higgs束の関係を使って余接束を扱い、複素数体上では双曲性・一意化へ結び付ける。これはIntroductionに示された論理の説明であり、後続節の各証明を検証したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2508.12062)
- **Introduction:** [PDF](https://arxiv.org/pdf/2508.12062v3) — Introduction（番号なし）, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 3.2, 3.3, 4.2, 5.2, 5.4; Corollaries 3.4, 3.7, 4.4; Conjecture 5.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2508.12062v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
