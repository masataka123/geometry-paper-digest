---
layout: paper
title: Algebraic geometry of bubbling Kahler metrics
title_ja: Kähler計量のbubblingを捉える代数的退化
authors: Yuji Odaka
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We give an algebro-geometric or non-archimedean framework to study bubbling phenomena of Kahler metrics with Euclidean volume growth, after [DS17, Sun23, dBS23]. In particular, for any degenerating family to log terminal singularity, we algebraically construct a finite sequence of birational modifications of the family with milder degenerations, and compare with analytic bubbling constructions in loc.cit. We also provide approaches in terms of coordinates and valuations. Our discussion partially depends on the general framework of stability theory in our [Od24b] (arXiv:2406.02489) after [HL14, AHLH23].
topic: algebraic-geometry
tags:
- metric-limits
- singularities
- birational-geometry
- k-stability
arxiv_id: 2406.14518v4
arxiv_url: https://arxiv.org/abs/2406.14518
arxiv_submitted: '2024-06-20'
arxiv_updated: '2026-09-17'
summary: log terminal Gorenstein特異点の退化族から、より穏やかな代数的minimal bubbleを二段階で構成する。重み付きブローアップによる表示と反復的な修正を通じて、Kähler計量の拡大極限を捉える枠組みを与える。解析的bubbleとの一般の同定は将来課題で、直接の比較は古典的な例に限られる。
abstract_en: We give an algebro-geometric or non-archimedean framework to study bubbling phenomena of Kahler metrics with Euclidean volume growth, after [DS17, Sun23, dBS23]. In particular, for any degenerating family to log terminal singularity, we algebraically construct a finite sequence of birational modifications of the family with milder degenerations, and compare with analytic bubbling constructions in loc.cit. We also provide approaches in terms of coordinates and valuations. Our discussion partially depends on the general framework of stability theory in our [Od24b] (arXiv:2406.02489) after [HL14, AHLH23].
summary_en: ''
abstract_ja: Kähler計量を拡大した際に現れるbubbleの背後のアフィン代数多様体を、退化族だけから構成する理論を扱う。Gorensteinかつlog terminalな特異点の族に対し、semistableとpolystableという二段階の代数的minimal bubbleを作り、重み付きブローアップで説明する。低次元の具体例では解析的なbubble列と一致するが、一般の解析的構成との精密な対応は未完成として区別される。
abstract_source_url: https://arxiv.org/abs/2406.14518
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.14518v4](https://arxiv.org/abs/2406.14518)
- **著者:** Yuji Odaka
- **初回投稿日:** 2024-06-20
- **最終更新日:** 2026-09-17
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

特異点へ退化するKähler計量を異なる倍率で拡大すると、もとの極限や接錐だけでは見えない空間が現れる。このbubbling現象を、計量の解析だけでなく代数的な退化族から捉えることが本論文の目的である。

著者は、点を指定したlog terminal Gorenstein特異点の退化に対し、代数的minimal bubbleを二段階で構成する。第一段階でsemistableな対象、第二段階でpolystableな対象を得るという構図で、いずれも同じ次元のアフィン多様体となる。

第一段階を重み付きブローアップで記述し、得られた新しい退化へ操作を繰り返すことで、より深いbubbleに対応する修正列を作る。曲面のA型特異点の例では、特異性が順に弱くなって最後に滑らかな族へ到達する計算を明示する。

ただし、一般の代数的構成がすべての解析的bubbleをそのまま与えるという完全な対応は主張されていない。最新版のIntroductionでは、直接の比較を既存の古典的な例に限定し、一般の精密な関係を将来課題として残している。

## 背景と問題設定

$\Delta$を滑らかなアフィン曲線の芽、$0\in\Delta$とし、相対次元$n$の平坦アフィン射$\pi:\mathcal X\to\Delta$を考える。各ファイバーはlog terminal Gorensteinで、$\pi$はGorenstein射、さらに切断$\sigma:\Delta\to\mathcal X$を固定する。必要に応じて有限分岐基底変換を行う。

計量が与えられたときの動機となる問題は、$c\_t\to\infty$に対する

$$
(x\_t\in X\_t,c\_t^2g\_t)
$$

の非崩壊なpointed Gromov–Hausdorff極限をどのように決めるかである。Kähler–Einstein幾何ではこうした極限がRicci-flat計量をもつアフィン特異点として現れることがあり、代数的な候補を構成する意義がある。

## 主結果

### 代数的minimal bubbleの二段階構成（Theorem 1.1）

上の設定に加えて、原論文が「strictly degenerating」と呼ぶ条件を課す。この追加条件の精密な定義はTheorem 2.4に委ねられているため、Introductionでは概略として次のように述べられている。

$$
(\sigma(\Delta)\subset\mathcal X\supset X)\ \rightsquigarrow\ X'\_{\mathrm{min},0}\ \rightsquigarrow\ X''\_{\mathrm{min},0}
$$

という純粋に代数幾何的な二段階の構成が存在する。ここで矢印は写像ではなく構成の手順を表す。両方の対象は$n$次元アフィン多様体で、log terminal Gorenstein特異点のみをもつ。第一を代数的semistable minimal bubble、第二を代数的polystable minimal bubbleと呼ぶ。

第一段階は重み付きブローアップで記述できる。その標準性は条件付きであり、得られる退化の全空間も一般に標準的とは限らない。新しい退化へ置き換えて反復することにより、より深い修正が得られる。

古典的な1、2次元の例では第二段階が自明となり、基礎アフィン多様体のレベルで解析的なminimal bubbleと一致する。一般のSunによる解析的構成との関係は、完成した同定定理として扱われていない。

### A型曲面特異点の計算例（Example 1.2）

Introductionは零切断を基点とする

$$
xy=z(z-t)(z-t^2)(z-t^3)
$$

を例に取る。中心ファイバーは$A\_3$特異点をもつ。重み$(2,2,1,1)$のブローアップと中心ファイバーの厳密変換の除去により、

$$
xy=z(z-1)(z-t)(z-t^2)
$$

を得る。$t=0$では$xy=z^3(z-1)$となり、原点の特異性は$A\_2$に下がる。

その後、二重被覆による基底変換と重み付き操作を行うと

$$
xy=z(t^2z-1)(z-1)(z-t^2)
$$

という$A\_1$特異点をもつ段階を経て、最後には

$$
xy=(t^4z-1)(t^2z-1)z(z-1)
$$

という滑らかな族へ到達する。対応する中心の計量はEguchi–Hanson型である。この例は二段階の第二操作が自明となる特別な場合を示すもので、一般の手順を一段階へ簡略化できることは意味しない。

## 証明の見取り図

Introductionでは、特異点の局所normalized volumeとK安定性に基づく退化の構図を、計量のrescalingに対応する代数的修正へ組み込む方針が説明される。座標と重みを使った具体的な計算が構成の動機となり、それを一般の退化へ拡張する。

通常の同時解消と違い、目的はすべてを滑らかにする一つの解消を選ぶことではなく、複数の拡大スケールに対応する中間のアフィン特異点を取り出すことである。不規則なSasaki–Einstein linkなどを許す一般の場合には手順はより複雑となる。Introductionが参照する詳細な追加条件や標準性の仮定は、本記事で推測して補っていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2406.14518)
- **Introduction:** [PDF](https://arxiv.org/pdf/2406.14518v4) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.1; Example 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2406.14518v4
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
