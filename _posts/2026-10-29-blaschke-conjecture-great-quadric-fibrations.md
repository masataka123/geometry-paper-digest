---
layout: paper
title: Blaschke Conjecture and Complex Geometry
title_ja: Blaschke予想と大二次曲面束の複素幾何
authors: Kyobeom Song
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.CV
arxiv_abstract: We provide a complex-geometric approach to the Blaschke conjecture, i.e., that a manifold whose injectivity radius equals its diameter is isometric to a compact rank-one symmetric space (CROSS). In particular, we introduce the great quadric fibration, a complex analogue of the great sphere fibration. Requiring its total space to be a complex submanifold simultaneously explains many properties that a Blaschke manifold is expected to possess, including its Clifford structure, Hopf fibration, and diffeomorphism class. Furthermore, the great quadric bundle coincides with the variety of minimal rational tangents (VMRT) of the ambient Fano variety in the standard CROSS cases, and we explain this through a bend-and-break argument in the setting of the Blaschke conjecture under a suitable complexification assumption. Combining this with Hwang-Mok VMRT recognition, we prove the Blaschke conjecture for manifolds admitting an adapted complex structure on their entire tangent bundles.
topic: differential-geometry
tags:
- curvature
- fano-varieties
- uniformization
arxiv_id: 2609.23822v3
arxiv_url: https://arxiv.org/abs/2609.23822
arxiv_submitted: '2026-09-20'
arxiv_updated: '2026-10-27'
summary: 単射半径と直径が一致するBlaschke多様体の剛性を、大球面束の複素版である大二次曲面束から調べる。接束全体に適合複素構造が存在するという仮定の下で、コンパクト階数1対称空間との等長性を示す。
abstract_en: We provide a complex-geometric approach to the Blaschke conjecture, i.e., that a manifold whose injectivity radius equals its diameter is isometric to a compact rank-one symmetric space (CROSS). In particular, we introduce the great quadric fibration, a complex analogue of the great sphere fibration. Requiring its total space to be a complex submanifold simultaneously explains many properties that a Blaschke manifold is expected to possess, including its Clifford structure, Hopf fibration, and diffeomorphism class. Furthermore, the great quadric bundle coincides with the variety of minimal rational tangents (VMRT) of the ambient Fano variety in the standard CROSS cases, and we explain this through a bend-and-break argument in the setting of the Blaschke conjecture under a suitable complexification assumption. Combining this with Hwang-Mok VMRT recognition, we prove the Blaschke conjecture for manifolds admitting an adapted complex structure on their entire tangent bundles.
summary_en: ''
abstract_ja: Blaschke予想を複素幾何から捉えるため、大球面束に対応する大二次曲面束を導入する。その全空間が複素部分多様体であるという条件は、Clifford構造、Hopf束との同型、微分同相型の剛性を統一的に説明する。標準的な階数1対称空間ではこの束が周囲のFano多様体の極小有理接線多様体と一致することを踏まえ、適切な複素化の下でbend-and-breakを適用する。接束全体に適合複素構造を持つBlaschke多様体について予想を証明する。
abstract_source_url: https://arxiv.org/abs/2609.23822
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.23822v3](https://arxiv.org/abs/2609.23822)
- **著者:** Kyobeom Song
- **初回投稿日:** 2026-09-20
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.DG（主分類）; math.AG, math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Blaschke多様体とは、各点での単射半径が多様体の直径に一致するコンパクト連結Riemann多様体である。Blaschke予想は、この単一の距離条件から球面や射影空間に代表されるコンパクト階数1対称空間への等長性が従うと予想する。

本論文は測地線の切断点を記述する大球面束を複素化し、「大二次曲面束」を導入する。著者の着眼点は、標準モデルでこの束がFano多様体の極小有理接線多様体（VMRT）と一致することである。束の全空間の正則性が、従来別々に扱われてきた剛性を結びつける。

主定理は、接束全体に適合複素構造を持つという追加条件の下でBlaschke予想を証明する。複素化の存在は強い仮定であり、Introductionもこのような複素化を一般に構成することを本手法の本質的な困難として挙げている。したがって本論文の定理を無条件の予想解決と読むべきではない。

## 背景と問題設定

大球面束の各ファイバーが張る実ベクトル空間を複素化し、内積の複素双線形拡張$g^{\mathbb C}$に関する等方直線を取る。これにより

$$
Q^{a-2}\longrightarrow Z\longrightarrow B,\qquad Z\subset\mathbb P(E^{\mathbb C}),\qquad g^{\mathbb C}(\xi,\xi)=0
$$

という大二次曲面束を得る。一般には$Z$は滑らかな実部分多様体にすぎず、複素部分多様体であることが追加の剛性条件となる。標準モデルではHopf束の幾何とVMRTが同じデータの異なる表現として現れる。

## 主結果

### 大二次曲面束の正則性による剛性（Theorem 3.1、Corollary 3.5の導入部での要約）

Introductionでは概略として次のように述べられている。大二次曲面束$Z\subset\mathbb P(E^{\mathbb C})$が複素部分多様体なら、$Z$は標準モデルと射影同値であり、元の大球面束は標準Hopf束と直交的に同型になる。対応するClifford構造もこの原理から回復される。

さらにBlaschke多様体の一点で対応する$Z\_p$がこの条件を満たせば、多様体は階数1対称空間と微分同相になる。ここで束の剛性、微分同相、等長性は異なる結論であり、最後の等長性には次の主定理の条件を用いる。

### 接束全体の適合複素構造から等長性へ（Theorem 1.1）

Blaschke多様体$M$の接束$TM$全体に適合複素構造が存在すれば、$M$はコンパクト階数1対称空間と等長である。適合複素構造は、概略として各測地線が接束内の複素曲線へ延びる構造である。局所的な複素化の存在だけでは主定理の仮定を満たさず、接束全体という条件が不可欠である。

## 証明の見取り図

測地線の複素曲線への延長にbend-and-breakを適用し、各点の大二次曲面束$Z\_p$を周囲の空間のVMRTと同定する。次に大二次曲面束の剛性とClifford表現の対応を用い、Hwang–MokのVMRTによる認識定理へ接続する。Introductionはこの経路を、Hopf束の情報を等長剛性にまで高める仕組みとして説明している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2609.23822)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.23822v3) — Section 1, pp. 1–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1、IntroductionにおけるTheorem 3.1とCorollary 3.5の要約
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.23822v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
