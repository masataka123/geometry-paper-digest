---
layout: paper
title: 'The Singular LeBrun Transform: Complex Conformal and Contact Geometry'
title_ja: 特異LeBrun変換による接触幾何と共形幾何の対応
authors: Yun-Gang Ye
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: 'A holomorphic conformal structure is rigid in the presence of rational curves: a complex conformal manifold that is not conformally flat contains no immersed rational null geodesic. So a natural compactification of such a manifold, on which its null geodesics close up, must degenerate along the boundary. We study this phenomenon for the complex conformal manifold that LeBrun attached to a complex contact manifold $Z$ in inverting Salamon''s twistor construction: the space $M_{\mathbb{C}}$ of balanced conics of $Z$ transverse to the contact distribution, with its holomorphic Riemannian metric of holonomy contained in $\mathrm{Sp}(n,\mathbb{C})\mathrm{Sp}(1,\mathbb{C})$. Its compactification by the degenerate conics of $Z$ forces the metric to become singular at the boundary. We develop a framework, the singular LeBrun transform, in which these singularities are a source of information rather than an obstacle: the singularities of the metric and of its curvature are read off
  from the degenerate rational curves of $Z$, locally through the contact neighbourhood of a curve and globally through the incidence variety. As an application, we give an alternative proof of the LeBrun--Salamon conjecture that all positive quaternionic-Kähler manifolds are symmetric, which was recently claimed by OpenAI and by Hu, Liu and Wan. The emphasis of the paper, however, is less on this result than on the framework developed here, which should apply to other problems of the same kind; we conclude with two such directions, negative quaternionic-Kähler manifolds and a singular Merkulov transform for Legendre moduli spaces.'
topic: differential-geometry
tags:
- symplectic-contact-geometry
- fano-varieties
- curvature
- algebraic-cycles-enumerative
- moduli
arxiv_id: 2611.21010v1
arxiv_url: https://arxiv.org/abs/2611.21010
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: 接触多様体上の円錐曲線のモジュライに現れるLeBrun計量を、退化曲線を含む境界まで調べる枠組みを構成する。曲率の延長と二点を通る円錐曲線の一意性を通じ、接触Fano多様体の等質性および正の四元数Kähler多様体の対称性を導くと著者は主張する。
abstract_en: 'A holomorphic conformal structure is rigid in the presence of rational curves: a complex conformal manifold that is not conformally flat contains no immersed rational null geodesic. So a natural compactification of such a manifold, on which its null geodesics close up, must degenerate along the boundary. We study this phenomenon for the complex conformal manifold that LeBrun attached to a complex contact manifold $Z$ in inverting Salamon''s twistor construction: the space $M_{\mathbb{C}}$ of balanced conics of $Z$ transverse to the contact distribution, with its holomorphic Riemannian metric of holonomy contained in $\mathrm{Sp}(n,\mathbb{C})\mathrm{Sp}(1,\mathbb{C})$. Its compactification by the degenerate conics of $Z$ forces the metric to become singular at the boundary. We develop a framework, the singular LeBrun transform, in which these singularities are a source of information rather than an obstacle: the singularities of the metric and of its curvature are read off
  from the degenerate rational curves of $Z$, locally through the contact neighbourhood of a curve and globally through the incidence variety. As an application, we give an alternative proof of the LeBrun--Salamon conjecture that all positive quaternionic-Kähler manifolds are symmetric, which was recently claimed by OpenAI and by Hu, Liu and Wan. The emphasis of the paper, however, is less on this result than on the framework developed here, which should apply to other problems of the same kind; we conclude with two such directions, negative quaternionic-Kähler manifolds and a singular Merkulov transform for Legendre moduli spaces.'
summary_en: ''
abstract_ja: 有理曲線を含む複素共形幾何には強い剛性があり、非平坦な計量を自然にコンパクト化すると境界で特異性が生じる。本論文は接触多様体上の円錐曲線から得られるLeBrun計量について、その特異性を退化曲線の幾何として読み解く。曲率が平行になることを示す方針を提示し、LeBrun–Salamon予想への別証明を主張するが、本記事はIntroductionに記された主張と戦略を解説するもので、後続の証明全体を検証したものではない。
abstract_source_url: https://arxiv.org/abs/2611.21010
license_name: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
license_url: http://creativecommons.org/licenses/by-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21010v1](https://arxiv.org/abs/2611.21010)
- **著者:** Yun-Gang Ye
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/)

## 要約

接触多様体 $Z$ 上の適切な円錐曲線を集めると、そのモジュライ空間にはLeBrunの正則Riemann計量が入る。しかし、円錐曲線を退化させてモジュライをコンパクト化すると、計量に極や退化が生じる。本論文はこの境界挙動を障害として取り除くのでなく、接触多様体の大域的な幾何を読み取る情報として使う。

中心となる対象は、計量の四元数Weyl曲率である。著者は、曲線が二本の直線へ分裂する場合、接触分布に接する場合、尖点を持つ場合、法束が跳ぶ場合を分け、曲率の延長可能性を調べる「特異LeBrun変換」を構成する。

応用として、一般の二点を通る円錐曲線の一意性から曲率の平行性を導き、接触Fano多様体の等質性と正の四元数Kähler多様体の対称性を証明すると主張する。これは大きな分類問題への証明の主張であり、本記事でその正しさを独立に認証するものではない。Introductionが区別する条件付きの延長定理と、その条件を取り除く数え上げ定理を分けて説明する。

## 背景と問題設定

$Z$ を複素次元 $2n+1$ の接触多様体、$L$ を接触線束とする。$L$ 次数2の滑らかな有理曲線で、接触分布に横断的かつ法束が $\mathcal O(1)^{\oplus2n}$ となるものをbalanced transverse conicと呼ぶ。そのモジュライ $M\_{\mathbb C}$ は複素次元 $4n$ で、ホロノミーが $\operatorname{Sp}(n,\mathbb C)\operatorname{Sp}(1,\mathbb C)$ に含まれる正則Einstein計量 $g^{\mathbb C}$ を持つ。

その曲率は

$$
R^{\mathbb C}=\rho\_0R\_0+R\_E^{\mathbb C},\qquad
R\_E^{\mathbb C}\in H^0(M\_{\mathbb C},S^4E\_{\mathbb C})
$$

と分解される。$\rho\_0\ne0$ は定数であり、$R\_0$ は四元数射影空間の曲率に対応する。課題は残りの四次テンソル $R\_E^{\mathbb C}$ が平行であることを、退化曲線の幾何から導くことである。

## 主結果

### 跳躍曲線への条件付き平行性（Theorem D）

$Z$ を $\dim Z=2n+1\ge7$、$\operatorname{Pic}(Z)=\mathbb ZL$ のコンパクト接触Fano多様体とし、一般の元がbalanced transverse conicであるHilbertスキーム成分を固定する。

一般の $z\in Z$ に対し、$z$ を通る曲線の接方向写像のグラフを正規化してコンパクト化したものを $\Gamma\_z$ とする。写像

$$
\widetilde\mu\_z:\Gamma\_z\longrightarrow\mathbb P(T\_zZ)
$$

が、法束の跳ぶ円錐曲線からなる因子を右辺の因子へ写さないと仮定する。この「harmless」の条件のもとで、$R\_E^{\mathbb C}$ は平行になると述べる。跳躍曲線が存在しないことより弱い条件である。

### 二点を通る円錐曲線（Theorem J）

同じ設定で $n\ge2$ とすると、$Z$ の一般の二点を通る指定成分の円錐曲線はちょうど一本であると主張する。その結果、$\widetilde\mu\_z$ は双有理で跳躍因子を収縮し、Theorem Dの追加条件が成立する。

この段階は曲率の局所計算とは別の大域的な数え上げ問題である。著者はOpenAIのプレプリントから二点ベクトルの持ち上げと試験曲線上での評価という二つの着想を取り入れたと説明する。

### 接触Fano多様体の等質性（Theorem H）

$\dim Z=2n+1\ge7$、$\operatorname{Pic}(Z)=\mathbb ZL$ のコンパクト接触Fano多様体は等質であり、複素単純Lie代数の随伴多様体であると主張する。随伴多様体は最高根ベクトルの張る直線の閉軌道であり、単に「対称性が多い」という記述より具体的な分類である。

### 正の四元数Kähler多様体（Theorem Q）

任意のコンパクトな正のスカラー曲率を持つ四元数Kähler多様体はWolf空間である、と著者は結論する。これはLeBrun–Salamon予想の内容に対応する。実次元4では四元数Kählerを自己双対Einsteinの意味で用い、計量の同定は相似変換までである。

## 証明の見取り図

固定した $z$ を通る曲線の葉 $\Sigma\_z$ に沿って曲率を読むと、固定されたベクトル空間への正則写像 $W\_z$ が得られる。これをコンパクトな空間へ延長できれば定数となり、葉に沿う定数性から

$$
\nabla\_XR\_E^{\mathbb C}=0\qquad(X\in TM\_{\mathbb C})
$$

へ到達する、というのが全体の筋道である。

実際にはすべての境界を同じように扱わず、接方向写像の像が因子になる境界に極がないことを示す。二直線の節点では接触近傍の有限次数の正規形とHeisenberg拡大の重みを用い、積分曲線では計量の極にもかかわらず曲率が延長して消えると述べる。尖点曲線は一般点を通らず、跳躍因子はTheorem Jによって収縮される。残る余次元2以上の集合はHartogs型延長で処理する。

平行曲率から局所対称性を得た後、実構造を持つtwistor空間では実切片へ戻ってWolf空間を得る。一般の接触Fano多様体では局所的な接触自己同型を延長し、等質性へ進む。負の四元数Kähler幾何や特異Merkulov変換は今後の方向として挙げられ、同じ分類が既に成立したという主張ではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21010)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21010v1) — AbstractおよびSection 1, pp. 2–7（主定理と証明戦略）
- **Introduction中で言及された主要結果:** Theorems D, J, H, Q（それぞれTheorem 11.8; Theorem 12.3等; Corollary 13.6; Theorem 13.8）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21010v1
- **確認したライセンス:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/)
- **source\_scope:** Abstract and Introduction
